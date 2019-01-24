const errorUtils = require('./utils/error.utils.js');
const invariant = require('./utils/invariant.js');
const routeSetter = require('./route-setter.js');
const compression = require('compression');
const bodyParser = require('body-parser');
const Logger = require('./winston.js');
const passport = require('passport');
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');

/**
 * @name mergeDefaults
 * @description Merge defaults into provided config
 * @param {Object} config
 * @return {Object} config merged with defaults
 */
function mergeDefaults(providedConfig) {
	// Define any default settings the server should have to get up and running
	let defaults = {
		profiles: {},
		server: {},
		logging: {
			level: 'error',
		},
	};

	return Object.assign(defaults, providedConfig);
}

/**
 * @name verifyAndLoadProfiles
 * @description Attempt to load profiles
 * @param {Object} profiles
 * @return {Array<String>} Formatted error messages for all encountered issues
 */
function verifyAndLoadProfiles(profiles) {
	let errors = [];
	// At this stage, we are only validating the configuration, not the server's
	// support for the given profile. We will do that in the when setting up routes
	// This may change for future versions when we generate new resources and we
	// can more easily perform the validation here
	Object.getOwnPropertyNames(profiles).forEach(name => {
		let versions = profiles[name].versions;
		let service = profiles[name].service;
		let message;
		// No service provided, we cannot load it
		if (!service || !versions) {
			message = `Invalid ${name} configuration. Missing service and/or versions.`;
		} else {
			try {
				profiles[name].serviceModule = typeof service === 'string' ? require(path.resolve(service)) : service;
			} catch (err) {
				message = `Invalid ${name} configuration. ${err.message}`;
			}
		}
		// Add the error message if we have one
		if (message) {
			errors.push(message);
		}
	});
	return errors;
}

/**
 * @name validate
 * @description Validate the config and provide defaults for some values
 * @param {Object} config
 */
function validate(config) {
	// If the ssl config is present, it must have a key and cert
	invariant(
		!config.server.ssl || (config.server.ssl && config.server.ssl.key && config.server.ssl.cert),
		'Invalid SSL Configuration, Please see the Wiki for a guide on how to setup SSL. ' +
			'See https://github.com/Asymmetrik/node-fhir-server-core/wiki/Configuration',
	);

	// If we have no profiles configured, notify them now
	invariant(
		Object.keys(config.profiles).length > 0,
		'No profiles configured. We do not enable any profiles by default so please ' +
			'review the profile wiki for how to enable profiles and capabilities. ' +
			'See https://github.com/Asymmetrik/node-fhir-server-core/wiki/Profile',
	);

	// We need to verify that each provided key is valid and that the config
	// for that profile contains a service that we can load. Let's compile a list
	// of errors while loading them.
	let errors = verifyAndLoadProfiles(config.profiles);

	invariant(
		errors.length === 0,
		'Encountered the following errors attempting to load your provided profiles:' +
			`\n${errors.join('\n')}\n` +
			'See https://github.com/Asymmetrik/node-fhir-server-core/wiki/Profile',
	);
}

class Server {
	constructor(config = {}) {
		// Merge in any defaults we want to set at the server level
		this.config = mergeDefaults(config);
		// Validate the config has minimum required settings to run
		validate(this.config);
		// Setup a logger for the application
		this.logger = new Logger(this.config.logging);
		// Setup our express instance
		this.app = express();
		// Setup some environment variables handy for setup
		let { server = {} } = this.config;

		this.env = {
			IS_PRODUCTION: !process.env.NODE_ENV || process.env.NODE_ENV === 'production',
			USE_HTTPS: server.ssl && server.ssl.key && server.ssl.cert,
		};
		// return self for chaining
		return this;
	}

	// Configure middleware
	configureMiddleware() {
		//Enable error tracking request handler if supplied in config
		if (this.config.errorTracking && this.config.errorTracking.requestHandler) {
			this.app.use(this.config.errorTracking.requestHandler());
		}
		// Enable stack traces
		this.app.set('showStackError', !this.env.IS_PRODUCTION);
		// Add compression
		this.app.use(compression({ level: 9 }));
		// Enable the body parser
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json({ type: ['application/fhir+json', 'application/json+fhir'] }));
		// return self for chaining
		return this;
	}

	// Configure helmet
	configureHelmet(helmetConfig) {
		/**
		 * The following headers are turned on by default:
		 * - dnsPrefetchControl (Controle browser DNS prefetching). https://helmetjs.github.io/docs/dns-prefetch-control
		 * - frameguard (prevent clickjacking). https://helmetjs.github.io/docs/frameguard
		 * - hidePoweredBy (remove the X-Powered-By header). https://helmetjs.github.io/docs/hide-powered-by
		 * - hsts (HTTP strict transport security). https://helmetjs.github.io/docs/hsts
		 * - ieNoOpen (sets X-Download-Options for IE8+). https://helmetjs.github.io/docs/ienoopen
		 * - noSniff (prevent clients from sniffing MIME type). https://helmetjs.github.io/docs/dont-sniff-mimetype
		 * - xssFilter (adds small XSS protections). https://helmetjs.github.io/docs/xss-filter/
		 */
		this.app.use(
			helmet(
				helmetConfig || {
					// Needs https running first
					hsts: this.env.USE_HTTPS,
				},
			),
		);
		// return self for chaining
		return this;
	}

	// Configure session
	configureSession(session) {
		// Session config can come from the core config as well, let's handle both cases
		let { server = {} } = this.config;
		// If a session was passed in the config, let's use it
		if (session || server.sessionStore) {
			this.app.use(session || server.sessionStore);
		}
		// return self for chaining
		return this;
	}

	// Configure authorization
	configureAuthorization() {
		// return self for chaining
		return this;
	}

	configurePassport() {
		if (this.config.auth && this.config.auth.strategy) {
			let { strategy } = require(path.resolve(this.config.auth.strategy.service));
			passport.use(strategy);
		}

		// return self for chaining
		return this;
	}

	// Setup a public directory for static assets
	setPublicDirectory(publicDirectory = '') {
		// Public config can come from the core config as well, let's handle both cases
		let { server = {} } = this.config;

		if (publicDirectory || server.publicDirectory) {
			this.app.use(express.static(publicDirectory || server.publicDirectory));
		}
		// return self for chaining
		return this;
	}

	// Setup profile routes
	setProfileRoutes() {
		routeSetter.setRoutes(this);
		// return self for chaining
		return this;
	}

	// Setup error routes
	setErrorRoutes() {
		//Enable error tracking error handler if supplied in config
		if (this.config.errorTracking && this.config.errorTracking.errorHandler) {
			this.app.use(this.config.errorTracking.errorHandler());
		}

		// Generic catch all error handler
		// Errors should be thrown with next and passed through
		this.app.use((err, req, res, next) => {
			// get base from URL instead of params since it might not be forwarded
			let base = req.url.split('/')[1];

			// If there is an error and it is our error type
			if (err && errorUtils.isServerError(err, base)) {
				res.status(err.statusCode).json(err);
			}
			// If there is still an error, throw a 500 and pass the message through
			else if (err) {
				let error = errorUtils.internal(err.message, base);
				this.logger.error(error.statusCode, err);
				res.status(error.statusCode).json(error);
			}
			// No error
			else {
				next();
			}
		});

		// Nothing has responded by now, respond with 404
		this.app.use((req, res) => {
			// get base from URL instead of params since it might not be forwarded

			let error = errorUtils.notFound();
			this.logger.error(error.statusCode, req.path);
			res.status(error.statusCode).json(error);
		});

		// return self for chaining
		return this;
	}

	// Start the server
	listen(port = process.env.PORT, callback) {
		let server = this.config.server;
		// If we are missing a port, let's notify them
		invariant(
			port || server.port,
			'Missing port. Please provide a port when initializing the server. See ' +
				'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Configuration',
		);

		// Update the express app to be in instance of createServer
		this.app = !this.env.USE_HTTPS
			? http.createServer(this.app)
			: https.createServer(
					{
						key: fs.readFileSync(server.ssl.key),
						cert: fs.readFileSync(server.ssl.cert),
					},
					this.app,
			  );

		// Start the app
		this.app.listen(port || server.port, callback);
	}
}

module.exports = Server;

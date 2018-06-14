// const methodOverride = require('method-override');
const compression = require('compression');
const bodyParser = require('body-parser');
// const request = require('superagent');
const Logger = require('./winston');
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const http = require('http');
const fs = require('fs');
const routeSetter = require('./route-setter');
const errors = require('./utils/error.utils');

const {
	validSSLConfiguration,
	loadProfile,
	loadAuthValidator
} = require('./utils/config.validators');


/**
 * @name validate
 * @description Validate the config and provide defaults for some values
 * @param {Object} config
 */
function validate (config = {}) {
	// Validate server settings
	let { server = {}} = config;

	let hasValidServerConfiguration = (
		// We must have a port
		// server.port &&
		// If the ssl config is present, it must have a key and cert
		(!server.ssl || validSSLConfiguration(server.ssl))
	);

	// Validate logger settings
	// These are not required, so if something is missing, we will set some sensible defaults
	if (!(config.logging && config.logging.level)) {
		// Add the default logging level but nothing else
		config.logging = Object.assign({}, config.logging, { level: 'error' });
	}

	// Validate auth validator
	config.auth = loadAuthValidator('auth', config.auth);

	// Grab all the profile keys
	let profileKeys = Object.keys(config.profiles);

	// Verify that each profile has a service and that it can be loaded
	let profileHasServicesConfigured = profileKeys.every(profileKey => {
		return loadProfile(profileKey, config.profiles[profileKey]);
	});

	// Throw errors if any of these conditions have failed
	if (!hasValidServerConfiguration) {
		throw new Error(
			'Server configuration is invalid.'
			+ ' Please review the README.md section on Server Configuration.'
		);
	}

	// If we have no profile keys, then they did not setup any profiles for the server
	// and we can't start
	if (profileKeys.length === 0) {
		throw new Error(
			'No profiles configured. You must configure atleast 1 profile to run this server.'
			+ ' Please review the README.md section on Configuring Profiles.'
		);
	}

	// Does the profile have services configured. Without services, we cannot get data
	// so these must be valid and loaded.
	if (!profileHasServicesConfigured) {
		throw new Error(
			'No valid profile configurations found.'
			+ ' Please review the README.md section on Configuring Profiles.'
		);
	}

	return config;
}


class Server {

	constructor (config = {}) {
		// Validate the config has the required properties
		this.config = validate(config);
		// Setup a logger for the application
		this.logger = new Logger(config.logging);
		// Setup our express instance
		this.app = express();
		// Setup some environment variables handy for setup
		let { server = {}} = this.config;

		this.env = {
			IS_PRODUCTION: process.env.NODE_ENV === 'production',
			USE_HTTPS: server.ssl && server.ssl.key && server.ssl.cert
		};
		// return self for chaining
		return this;
	}

	// Configure middleware
	configureMiddleware () {
		// Enable stack traces
		this.app.set('showStackError', !this.env.IS_PRODUCTION);
		// Add compression
		this.app.use(compression({ level: 9 }));
		// Enable the body parser
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		// return self for chaining
		return this;
	}

	// Configure helmet
	configureHelmet (helmetConfig) {
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
		this.app.use(helmet(helmetConfig || {
			// Needs https running first
			hsts: this.env.USE_HTTPS
		}));
		// return self for chaining
		return this;
	}

	// Configure session
	configureSession (session) {
		// Session config can come from the core config as well, let's handle both cases
		let { server = {}} = this.config;
		// If a session was passed in the config, let's use it
		if (session || server.sessionStore) {
			this.app.use(session || server.sessionStore);
		}
		// return self for chaining
		return this;
	}

	// Configure authorization
	configureAuthorization () {
		// return self for chaining
		return this;
	}

	// Setup a public directory for static assets
	setPublicDirectory (publicDirectory = '') {
		// Public config can come from the core config as well, let's handle both cases
		let { server = {}} = this.config;

		if (publicDirectory || server.publicDirectory) {
			this.app.use(express.static(publicDirectory || server.publicDirectory));
		}
		// return self for chaining
		return this;
	}

	// Setup profile routes
	setProfileRoutes () {
		routeSetter.setRoutes(this);
		// return self for chaining
		return this;
	}

	// Setup error routes
	setErrorRoutes () {
		// Generic catch all error handler
		// Errors should be thrown with next and passed through
		this.app.use((err, req, res, next) => {
			// If there is an error and it is our error type
			if (err && errors.isServerError(err, req.params.version)) {
				res.status(err.statusCode).json(err);
			}
			// If there is still an error, throw a 500 and pass the message through
			else if (err) {
				let error = errors.internal(err.message, req.params.version);
				this.logger.error(error.statusCode, err.message);
				res.status(error.statusCode).json(error);
			}
			// No error
			else {
				next();
			}
		});

		// Nothing has responded by now, respond with 404
		this.app.use((req, res) => {
			let error = errors.notFound(req.params.version);
			this.logger.error(error.statusCode, req.path);
			res.status(error.statusCode).json(error);
		});

		// return self for chaining
		return this;
	}

	// Start the server
	listen (port = process.env.PORT, callback) {
		let { server = {}} = this.config;

		// Update the express app to be in instance of createServer
		this.app = !this.env.USE_HTTPS
			? http.createServer(this.app)
			: https.createServer({
				key: fs.readFileSync(server.ssl.key),
				cert: fs.readFileSync(server.ssl.cert)
			}, this.app);

		// Start the app
		this.app.listen(port, callback);
	}

}

module.exports = Server;

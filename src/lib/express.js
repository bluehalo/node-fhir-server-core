// const methodOverride = require('method-override');
const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const request = require('superagent');
const https = require('https');
const http = require('http');
const fs = require('fs');
const routeSetter = require('../server/route-setter');
const errors = require('../server/utils/error.utils');
const {
	EVENTS
} = require('../constants');


/**
 * @function initAuthConfig
 * @summary Retrieve authorization server configurations via config or discovery.
 * @return {Promise}
 */
let initAuthConfig = async function (config) {
	const discoveryUrl = config.discoveryUrl;
	let oauthConfig = {};

	if (discoveryUrl) {
		const discoveryResponse = await request.get(discoveryUrl).then(res => res.body);
		discoveryResponse.jwkSet = await request.get(discoveryResponse.jwks_uri).then(res => res.body);
		Object.assign(oauthConfig, discoveryResponse);

		Object.assign(oauthConfig, config);

		if (typeof oauthConfig.jwkSet.keys === 'undefined') {
			throw new Error('keys are not defined');
		}
		if (typeof oauthConfig.authorization_endpoint !== 'string') {
			throw new Error('authorization_endpoint is not a string');
		}
		if (typeof oauthConfig.token_endpoint !== 'string') {
			throw new Error('token_endpoint is not a string');
		}
		if (typeof oauthConfig.registration_endpoint !== 'string') {
			throw new Error('token_endpoint is not a string');
		}
		if (typeof oauthConfig.issuer !== 'string') {
			throw new Error('issuer is not a string');
		}
	}

	// Introspection is not required depending on the oauth2 implementation (required for openid)
	if (discoveryUrl && typeof oauthConfig.introspection_endpoint !== 'string') {
		throw new Error('introspection_endpoint is not a string');
	}

	return oauthConfig;
};


/**
 * @function configureMiddleware
 * @summary Configure express middleware with stack trace, compression, body parser
 * @param {Express.app} app
 */
let configureMiddleware = function (app, IS_PRODUCTION) {

	// Enable stack traces, compression, body parser
	app.set('showStackError', !IS_PRODUCTION);
	app.use(compression({ level: 9 }));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// Enable methodOverrie if use put & delete. Currently, not necessary.
	// app.use(methodOverride());
};


/**
 * @function configureSession
 * @summary Use session stored in serverConfig
 * @param {Express.app} app
 */
let configureSession = function (app, serverConfig) {
	if (serverConfig.sessionStore) {
		app.use(serverConfig.sessionStore);
	}
};


/**
 * @function configureEvents
 * @summary Configure Audit (security/privacy) and Providence (resource updated/created/deleted) events
 * @param {Express.app} app
 */
let configureEvents = function (app, events = {}) {
	// Trigger Audit Event when there's security/privacy related event
	if (typeof events.auditEvent === 'function') {
		app.on(EVENTS.AUDIT, events.auditEvent);
	}
	// Trigger Provenance Event when resources are updated/created/deleted
	if (typeof events.provenance === 'function') {
		app.on(EVENTS.PROVENANCE, events.provenance);
	}
};


/**
 * @function secureHeaders
 * @summary Add helmet to secure headers
 * @param {Express.app} app
 */
let secureHeaders = function (app, USE_HTTPS) {
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
	app.use(helmet({
		// Needs https running first
		hsts: USE_HTTPS
	}));
};


/**
 * @function setupRoutes
 * @summary Add route with a static publicDirectory
 * @param {Express.app} app
 */
let setupRoutes = function (app, config, logger) {
	// Setup a static directory in case one is needed
	if (config.server && config.server.publicDirectory) {
		app.use(express.static(config.server.publicDirectory));
	}

	routeSetter.setRoutes({ logger, config, app });
};


/**
 * @function setupErrorHandler
 * @summary Add error handler
 * @param {Express.app} app
 */
let setupErrorHandler = function (app, logger) {
	// Generic catch all error handler
	// Errors should be thrown with next and passed through
	app.use((err, req, res, next) => {
		// If there is an error and it is our error type
		if (err && errors.isServerError(err, req.params.version)) {
			res.status(err.statusCode).json(err);
		}
		// If there is still an error, throw a 500 and pass the message through
		else if (err) {
			let error = errors.internal(err.message, req.params.version);
			logger.error(error.statusCode, err.message);
			res.status(error.statusCode).json(error);
		}
		// No error
		else {
			next();
		}
	});

	// Nothing has responded by now, respond with 404
	app.use((req, res) => {
		let error = errors.notFound(req.params.version);
		logger.error(error.statusCode, req.path);
		res.status(error.statusCode).json(error);
	});
};


/**
 * @function initialize
 * @return {Promise}
 */
module.exports.initialize = async ({ config, logger }) => {
	logger.info('Initializing express');

	const { auth, server, events } = config;
	const USE_HTTPS = (server.ssl && server.ssl.key && server.ssl.cert);
	const IS_PRODUCTION = process.env.NODE_ENV === 'production';

	// Create our express instance
	let app = express();

	// Setup auth configs for middleware
	await initAuthConfig(auth);

	// Add configurations
	configureMiddleware(app, IS_PRODUCTION);
	configureSession(app, server);
	configureEvents(app, events);
	secureHeaders(app, USE_HTTPS);
	setupRoutes(app, config, logger);
	setupErrorHandler(app, logger);

	/**
	* Use an https server in production, this must be last
	* If this app is behind a load balancer on AWS that has SSL certs, then you
	* do not necessarily need this, but if this is being deployed with nothing in
	* front of it, then you must add some SSL certs. This last section can be updated
	* depending on the environment that you are deploying to.
	*/
	if (USE_HTTPS) {
		// HTTPS options
		let options = {
			key: fs.readFileSync(server.ssl.key),
			cert: fs.readFileSync(server.ssl.cert)
		};

		// Pass back https server
		return https.createServer(options, app);
	}

	// Pass back http server
	return http.createServer(app);
};

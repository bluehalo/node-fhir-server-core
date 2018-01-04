// const methodOverride = require('method-override');
const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const axios = require('axios');
const https = require('https');
const http = require('http');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const errors = require('../server/utils/error.utils');
const appConfig = require('../config');

/**
 * @function configureMiddleware
 * @summary Configure some basic express middleware
 * @param {Express.app} app
 */
let configureMiddleware = function (app, IS_PRODUCTION) {

	// Enable stack traces
	app.set('showStackError', !IS_PRODUCTION);

	// Add compression
	app.use(compression({ level: 9 }));

	// Enable the body parser
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// Enable this if necessary to use put and delete, currently, we do not need it so don't enable it
	// app.use(methodOverride());

};

/**
 * @function configureSession
 * @summary Configure some basic express middleware
 * @param {Express.app} app
 */
let configureSession = function (app, serverConfig) {
	// If a session was passed in the config, let's use it
	if (serverConfig.sessionStore) {
		app.use(serverConfig.sessionStore);
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
 * @summary Add routes
 * @param {Express.app} app
 */
let setupRoutes = function (app, config, logger) {
	let routePaths = path.resolve(__dirname, '../..', appConfig.files.routes);
	let routes = glob.sync(routePaths);
	routes.forEach(route => require(route)(app, config, logger));
};

/**
 * @function retrieveAuthServerInfo
 * @summary Retrieve authorization server configurations via config or discovery.
 * @return {Promise}
 */
let retrieveAuthServerInfo = async function (config) {
	const discoveryUrl = config.issuer.discoveryUrl;
	let oauthConfig, jwkSet;

	if (!discoveryUrl) {
		oauthConfig = config.issuer.oauthConfig;
		jwkSet = config.issuer.jwkSet;
	} else {
		oauthConfig = await axios.get(discoveryUrl).then(res => res.data);
		jwkSet = await axios.get(oauthConfig.jwks_uri).then(res => res.data);
	}

	if (typeof jwkSet.keys === 'undefined') {
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

	// Introspection is not required depending on the oauth2 implementation (required for openid)
	if (discoveryUrl && typeof oauthConfig.introspection_endpoint !== 'string') {
		throw new Error('introspection_endpoint is not a string');
	}

	return { oauthConfig, jwkSet };
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
		if (err && errors.isServerError(err)) {
			logger.error(err.code, err.message);
			res.status(err.code).end(err.message);
		}
		// If there is still an error, throw a 500 and pass the message through
		else if (err) {
			logger.error(500, err.message);
			res.status(500).end(err.message);
		}
		// No error
		else {
			next();
		}
	});

	// Nothing has responded by now, respond with 404
	app.use((req, res) => {
		let error = errors.notFound();
		logger.error(error.code, error.message);
		res.status(error.code).end(error.message);
	});
};

/**
 * @function initialize
 * @return {Promise}
 */
module.exports.initialize = async ({ config, logger }) => {
	logger.info('Initializing express');

	const { auth, server } = config;
	const USE_HTTPS = (server.ssl && server.ssl.key && server.ssl.cert);
	const IS_PRODUCTION = process.env.NODE_ENV === 'production';

	// Create our express instance
	let app = express();

	// Setup auth configs for middleware
	/* eslint-disable no-unused-vars */
	let { oauthConfig, jwkSet } = await retrieveAuthServerInfo(auth);
	/* eslint-enable no-unused-vars */

	// Add some configurations to our app
	configureMiddleware(app, IS_PRODUCTION);
	configureSession(app, server);
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

		// These are required for running in https
		let options = {
			key: fs.readFileSync(server.ssl.key),
			cert: fs.readFileSync(server.ssl.cert)
		};

		// Pass back our https server
		return https.createServer(options, app);
	}

	// Pass our app back if we are successful
	return http.createServer(app);
};

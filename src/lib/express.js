const methodOverride = require('method-override');
const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const path = require('path');
const fs = require('fs');
const config = require(path.resolve('./src/config/config'));
const logger = require(path.resolve('./src/lib/winston'));

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * @function configureMiddleware
 * @summary Configure some basic express middleware
 * @param {Express.app} app
 */
let configureMiddleware = function (app) {
  
  // Enable stack traces
  app.set('showStackError', true);
  
  // Enable jsonp
  app.enable('jsonp callback');
  
  // Add compression
  app.use(compression({ level: 9 }));
  
  // Enable the body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // Enable this if necessary to use put and delete, currently, we do not need it so don't enable it
  // app.use(methodOverride());

};

/**
 * @function secureHeaders
 * @summary Add helmet to secure headers
 * @param {Express.app} app
 */
let secureHeaders = function (app) {
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
    hsts: IS_PRODUCTION
  }));
};

/**
 * @function setupRoutes
 * @summary Add routes
 * @param {Express.app} app
 */
let setupRoutes = function (app) {
  config.files.routes.forEach(route => require(path.resolve(route))(app));
};

/**
 * @function initialize
 * @return {Promise} 
 */
module.exports.initialize  = () => new Promise((resolve, reject) => {
  logger.info('Initializing express');

  try {

    // Create our express instance
    let app = express();
    
    // Add some configurations to our app
    configureMiddleware(app);
    secureHeaders(app);
    setupRoutes(app);
    
    // Use an https server in production
    if (IS_PRODUCTION) {
      
      // These are required for running in https
      let options = {
        key: fs.readFileSync(config.security.key),
        cert: fs.readFileSync(config.security.cert)
      };
      
      app = https.createServer(options, app);
    }

    // Pass our app back if we are successful
    resolve(app);

  } catch (err) {

    // Pass the error out, implementor should exit if this errors
    reject(err);
  }
});
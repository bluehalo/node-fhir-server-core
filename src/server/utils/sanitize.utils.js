const sanitize = require('sanitize-html');
const moment = require('moment-timezone');
const validator = require('validator');
const path = require('path');
const xss = require('xss');
const errors = require(path.resolve('./src/server/utils/error.utils'));

let parseValue = function (type, value) {
  let result;
  switch (type) {
    case 'number':
      result = validator.toFloat(value);
      break;
    case 'date':
      result = parseInt(value)
				? moment(+value).tz('America/New_York')
				: moment(value).tz('America/New_York');
      break;
    case 'boolean':
      result = validator.toBoolean(value);
      break;
    case 'string':
      // strip any html tags from the query
      // xss helps prevent html from slipping in
      // strip a certain range of unicode characters
      // replace any non word characters
      result = validator.stripLow(xss(sanitize(value)));
      break;
  }
  return result;
};

let validateType = function (type, value) {
  let result;
  switch (type) {
    case 'number':
      result = typeof value === 'number' && !Number.isNaN(value);
			break;
    case 'boolean':
      result = typeof value === 'boolean';
			break;
    case 'string':
      result = typeof value === 'string';
			break;
    case 'date':
      result = moment(value).isValid();
			break;
		default:
			result = false;
			break;
  }
  return result;
};

let parseParams = req => {
  if (req.params && Object.keys(req.params).length) { return req.params; }
  if (req.query && Object.keys(req.query).length) { return req.query; }
  if (req.body && Object.keys(req.body).length) { return req.body; }
  return {};
};

/**
 * @function sanitizeMiddleware
 * @summary Sanitize the arguments by removing extra arguments, escaping some, and
 * throwing errors if arg should throw when an invalid one is passed. This will replace
 * req.body and/or req.params with a clean object
 * @param {Array<Object>} config - Sanitize config for how to deal with params
 * @param {string} config.name - Argument name
 * @param {string} config.type - Argument type. Acceptable types are (boolean, string, number)
 * @param {boolean} required - Should we throw if this argument is present and invalid, default is false
 */
let sanitizeMiddleware = function (config) {
  return function (req, res, next) {
    let currentArgs = parseParams(req);
    let cleanArgs = {};

    // Check each argument in the config
    for (let i = 0; i < config.length; i++) {
      let conf = config[i];

      // If the argument is required but not present
      if (!currentArgs[conf.name] && conf.required) {
        return next(errors.invalidParameter(conf.name + ' is required.'));
      }

      // Try to cast the type to the correct type, do this first so that if something
      // returns as NaN we can bail on it
      try {
        if (currentArgs[conf.name]) {
          cleanArgs[conf.name] = parseValue(conf.type, currentArgs[conf.name]);
        }
      } catch (err) {
        return next(errors.invalidParameter(conf.name + ' is invalid.'));
      }

      // If we have the arg and the type is wrong, throw invalid arg
      if (cleanArgs[conf.name] !== undefined && !validateType(conf.type, cleanArgs[conf.name])) {
        return next(errors.invalidParameter(conf.name));
      }
    }

    // All is well, update params, query, or body, and move on to the next middleware/function
    if (req.params && Object.keys(req.params).length) { req.params = cleanArgs; }
    if (req.query && Object.keys(req.query).length) { req.query = cleanArgs; }
    if (req.body && Object.keys(req.body).length) { req.body = cleanArgs; }
    next();
  };
};

module.exports = {
  sanitizeMiddleware
};

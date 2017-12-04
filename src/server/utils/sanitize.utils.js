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
    case 'boolean':
      result = validator.toBoolean(value);
      break;
    case 'string':
      // strip characters that are < 32 and 127 from unicode table
      // xss helps prevent xss from slipping in
      // replace any non word characters
      result = validator.stripLow(xss(value)).replace(/[^\w]/g, '');
      break;
  }
  return result;
};

let parseParams = req => {
  if (Object.keys(req.params).length) { return req.params; }
  if (Object.keys(req.query).length) { return req.query; }
  if (Object.keys(req.body).length) { return req.body; }
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
    let args = {};
    // Check each argument in the config
    let currentArgs = parseParams(req);

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
          args[conf.name] = parseValue(conf.type, currentArgs[conf.name]);
        }
      } catch (err) {
        return next(err);
      }
      
      // If we have the arg and the type if wrong, throw invalid arg
      if (currentArgs[conf.name] && typeof currentArgs[conf.name] !== conf.type) {
        return next(errors.invalidParameter(conf.name));
      }
    }
    
    // All is well, update params, query, or body, and move on to the next middleware/function
    if (Object.keys(req.params).length) { req.params = args; }
    if (Object.keys(req.query).length) { req.query = args; }
    if (Object.keys(req.body).length) { req.body = args; }
    next();
  };
};

module.exports = {
  sanitizeMiddleware
};
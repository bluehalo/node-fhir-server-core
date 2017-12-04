const path = require('path');
const xss = require('xss');
const errors = require(path.resolve('./src/server/utils/error.utils'));

let parseValue = function (type, value) {
  let result;
  switch (type) {
    case 'number':
      result = parseFloat(value);
      break;
    case 'boolean':
      result = (value.toLowerCase() === 'true') ? true : false;
      break;
    case 'string':
      result = xss(value);
      break;
    case 'object':
      result = value;
      break;
  }
  return result;
};

/**
 * @function sanitizeMiddleware
 * @summary Sanitize the arguments by removing extra arguments, escaping some, and
 * throwing errors if arg should throw when an invalid one is passed. This will replace
 * req.body and/or req.params with a clean object
 * @param {Array<Object>} config - Sanitize config for how to deal with params
 * @param {string} config.name - Argument name
 * @param {string} config.type - Argument type. Acceptable types are (boolean, string, number, object)
 * @param {boolean} required - Should we throw if this argument is present and invalid, default is false
 */
let sanitizeMiddleware = function (config) {
  return function (req, res, next) {
    let args = {};
    
    // Check each argument in the config
    let currentArgs = req.params || req.body || {};
    
    for (let i = 0; i < config.length; i++) {
      let conf = config[i];
      // If the argument is required but not present
      if (!currentArgs[conf.name] && conf.required) {
        return next(errors.invalidParameter(conf.name + ' is required.'));
      }
      // Try to cast the type to the correct type
      try {
        args[conf.name] = parseValue(conf.type, currentArgs[conf.name]);
      } catch (err) {
        return next();
      }
      
      // If we have the arg, it is fatal if it is not correct, and the type if wrong, throw invalid arg
      if (currentArgs[conf.name] && conf.fatal && typeof currentArgs[conf.name] !== conf.type) {
        return next(errors.invalidParameter(conf.name));
      }
    }
    
    // All is well, update params and body, and move on to the next middleware/function
    if (req.params) { req.params = args; }
    if (req.body) { req.body = args; }
    next();
  };
};

module.exports = {
  sanitizeMiddleware
};
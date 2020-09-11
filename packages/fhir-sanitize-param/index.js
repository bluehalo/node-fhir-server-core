const sanitize = require('sanitize-html');
const moment = require('moment-timezone');
const validator = require('validator');
const xss = require('xss');

/**
 * @function mismatchError
 * @param {String} field - Name of the parameter param
 * @param {String} type - Expected type
 * @return {String}
 */
let mismatchError = function ({ field, type }) {
  return `Type mismatch, expected ${type} for parameter ${field}`;
};

/**
 * @function invariant
 * @description Throw the given error if the assertion is false
 * @throws
 */
let invariant = function (assertion, message) {
  if (!assertion) {
    throw new Error(message);
  }
};

/**
 * @function splitPrefixFromValue
 * @description Separate the prefix (if there is one) from the actual value
 * @param value
 * @returns {{prefix: string, value: *}}
 */
let splitPrefixFromValue = function (value) {
  const supportedPrefixes = ['eq', 'ne', 'gt', 'lt', 'ge', 'le', 'sa', 'eb', 'ap'];

  // Default the prefix to 'eq'.
  let prefix = 'eq';

  let prefixTestMatches = /^([a-z]+)([+-]?\d+.*)/.exec(value);
  if (prefixTestMatches && prefixTestMatches.length > 2) {
    invariant(supportedPrefixes.includes(prefix), `Supplied prefix '${prefix}' is not supported.`);
    prefix = validator.stripLow(xss(sanitize(prefixTestMatches[1])));
    value = validator.stripLow(xss(sanitize(prefixTestMatches[2])));
  }
  return { prefix, value };
};

/**
 * @function sanitizeString
 * @description Sanitize string values.
 * @param field
 * @param value
 * @param type
 * @returns {*}
 */
let sanitizeString = function ({ field, value, type = 'string' }) {
  invariant(typeof value === 'string', mismatchError({ field, type }));
  value = validator.stripLow(xss(sanitize(value)));
  return value;
};

/**
 * @function sanitizeBoolean
 * @description Sanitize boolean values. Can only be a string saying either 'true' or 'false'.
 * @param field
 * @param value
 * @param type
 * @returns {*}
 */
let sanitizeBoolean = function ({ field, value, type = 'boolean' }) {
  // Run the value through the string sanitization to get rid of any risky characters
  value = sanitizeString({ field, value }).toLowerCase();
  if (['true', 'false'].includes(value)) {
    value = validator.toBoolean(value, true);
  }
  invariant(typeof value === type, mismatchError({ field, type }));
  return value;
};

/**
 * @function sanitizeDate
 * @description Sanitize date values. Must be a valid moment.
 * @param field
 * @param value
 * @param type
 * @returns {*}
 */
let sanitizeDate = function ({ field, value, type = 'date' }) {
  // Run the value through the string sanitization to get rid of any risky characters
  value = sanitizeString({ field, value });
  let prefix;
  ({ prefix, value } = splitPrefixFromValue(value));
  invariant(moment(value).isValid(), mismatchError({ field, type }));
  return { prefix, value };
};

/**
 * @function sanitizeId
 * @description Sanitize ID values. Remove disallowed characters and truncate at 64 characters.
 * @param id
 */
let sanitizeId = function (id) {
  if (id) {
    // Run the value through the string sanitization to get rid of any risky characters
    id = sanitizeString({ field: 'id', value: id });
    id = id.replace(/[^A-Za-z0-9-.]/g, '');
    id = id.length > 64 ? id.substring(0, 64) : id;
  }
  return id;
};

/**
 * @function sanitizeNumber
 * @description Sanitize number values. The implementation preserves significant digits.
 * @param field
 * @param value
 * @param type
 * @returns {*}
 */
let sanitizeNumber = function ({ field, value, type = 'number' }) {
  // Run the value through the string sanitization to get rid of any risky characters
  value = sanitizeString({ field, value });
  let prefix;
  ({ prefix, value } = splitPrefixFromValue(value));
  const coercedVal = validator.toFloat('' + value);
  invariant(!isNaN(coercedVal), mismatchError({ field, type }));
  const expectedValue = Number(coercedVal);
  const givenValue = Number(value);

  invariant(expectedValue === givenValue, `Expected value: ${expectedValue} does not equal given value: ${givenValue}`);
  return { prefix, value };
};

/**
 * @function sanitizeToken
 * @description Sanitize token values.
 * @param field
 * @param value
 * @param canHaveSystem
 * @param type
 * @returns {*}
 */
let sanitizeToken = function ({ field, value, isBoolean, type = 'token' }) {
  // Run the value through the string sanitization to get rid of any risky characters
  value = sanitizeString({ field, value });

  // Tokens have 1 or 2 parts containing codes and systems that are separated by pipes.
  let chunks = value.split('|');
  invariant([1, 2].includes(chunks.length), mismatchError({ field, type }));
  let system;
  let code;
  switch (chunks.length) {
    case 1:
      system = '';
      code = chunks[0];
      break;
    case 2:
      system = chunks[0];
      code = chunks[1];
      break;
  }
  invariant(code || system, mismatchError({ field, type }));

  if (isBoolean) {
    code = sanitizeBoolean({ field, value: code }).toString();
  } else {
    code = validator.stripLow(xss(sanitize(code)));
    system = validator.stripLow(xss(sanitize(system)));
  }
  return { code, system };
};

/**
 * @function sanitizeQuantity
 * @description Sanitize quantity values
 * @param field
 * @param value
 * @param type
 * @returns {*}
 */
let sanitizeQuantity = function ({ field, value, type = 'quantity' }) {
  // Run the value through the string sanitization to get rid of any risky characters
  value = sanitizeString({ field, value });
  let [number, token] = value.split(/\|(.+)/);
  let prefix;
  ({ prefix, value } = sanitizeNumber({
    field,
    value: number,
    type: 'quantity.number',
  }));
  let system = '';
  let code = '';
  if (token) {
    ({ system, code } = sanitizeToken({
      field,
      value: token,
      type: 'quantity.token',
    }));
  }
  invariant(value, mismatchError({ field, type }));

  return { prefix, value, system, code };
};

/**
 * sanitizeSearchResultParameter
 * @param field
 * @param value
 * @returns {number}
 */
let sanitizeSearchResultParameter = function ({ field, value }) {
  // Run the value through the string sanitization to get rid of any risky characters
  let sanitizedValue = sanitizeString({ field, value });
  let validValues = {
    _summary: ['true', 'text', 'data', 'count', 'false'],
    _total: ['none', 'estimate', 'accurate'],
    _contained: ['true', 'false', 'both'],
    _containedType: ['container', 'contained'],
  };

  // If the parameter is '_count', make sure that it's a positive integer.
  if (field === '_count') {
    sanitizedValue = Number(value);
    invariant(
      Number.isInteger(sanitizedValue) && sanitizedValue > 0,
      mismatchError({ field, type: 'positive integer' }),
    );
  }

  // If it's one of the params with a limited set of valid values, make sure we have one of the valid values.
  if (validValues[field]) {
    invariant(
      validValues[field].includes(sanitizedValue),
      mismatchError({ field, type: validValues[field].toString() }),
    );
  }

  return sanitizedValue;
};

module.exports = {
  sanitizeBoolean,
  sanitizeDate,
  sanitizeId,
  sanitizeNumber,
  sanitizeQuantity,
  sanitizeString,
  sanitizeToken,
  sanitizeSearchResultParameter,
};

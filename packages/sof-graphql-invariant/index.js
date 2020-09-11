const scopeChecker = require('@asymmetrik/sof-scope-checker');
const { GraphQLError, coerceValue, isInputType } = require('graphql');

/**
 * @name formatError
 * @description Wrapper to wrap an operation outcome in a GraphQLError
 * @param {string} message - Generic error message for GraphQL
 * @param {Object} operationOutcome - OperationOutcome instance
 * @return {GraphQLError}
 */
function formatError(message, resource) {
  return new GraphQLError(
    message,
    null,
    null,
    null,
    ['sof-graphql-invariant'],
    null,
    resource ? { resource } : null
  );
}

/**
 * @name parseScopes
 * @description Simple function to extract scopes from a token
 * @param {Object} token - Token containing a scope property
 * @param {string} token.scope - Space separated list of scopes
 * @return {Array<string>}
 */
function parseScopes(token) {
  return (token && token.scope && token.scope.split(' ')) || [];
}

/**
 * @name operationOutcome
 * @description Simple function to generate an operation outcome JSON
 * @param {string} message - String error message
 * @param {string} code - Error code
 * @param {string} severity - Error severity
 * @return {Array<string>}
 */
function operationOutcome(message, code, severity) {
  return {
    resourceType: 'OperationOutcome',
    issue: {
      code,
      severity,
      diagnostics: message,
    },
  };
}

/**
 * @name smartOnFHIRScopeInvariant
 * @description Resolver that wraps the original resolver and validates scopes
 * if we are using SOF for our authentication. This allows for partial error
 * handling by performing validation on the resource level.
 * @param {Object} options
 * @param {string} options.name - Name of the profile user is accessing
 * @param {string} options.action - Action user is performing
 * @param {Object} options.schema - Input Schema
 * @param {Function} resolver - Resolver function for a schema
 * @return {Promise|Array<Promise>|Object|Array<Object>} results from
 * invoking a resolver. Can be anything a valid resolver normally returns.
 */
module.exports = function smartOnFHIRScopeInvariant(options = {}, resolver) {
  let { name, action, schema } = options;
  // Error if an input schema is not provided
  if (!isInputType(schema)) {
    let message = 'Invalid schema, schema must be an input type schema.';
    return formatError(message);
  }
  // If they did not provide a resolver, error out now
  else if (typeof resolver !== 'function') {
    let message = 'Invalid resolver, resolver argument must be a function.';
    return formatError(
      message,
      coerceValue(operationOutcome(message, 'exception', 'error'), schema).value
    );
  }

  // return our resolver function
  return function scopeResolver(root, args, context, info) {
    let req = context && context.req;
    let env = process.env;

    // Mechanism for disabling this feature, should be enabled by default
    if (env && env.SOF_AUTHENTICATION === 'false') {
      return resolver(root, args, context, info);
    }

    // Mechanism for disabling when using Graphiql via graphql-express
    if (env && env.HAS_GRAPHIQL === 'true' && /\$graphiql$/.test(req.baseUrl)) {
      return resolver(root, args, context, info);
    }

    // Parse our scopes and validate them
    let scopes = parseScopes(req && req.user);
    let { error } = scopeChecker(name, action, scopes);
    let errorType = error && error.type;

    // This message means scopeChecker received an invalid configuration
    if (errorType === 'internal') {
      return formatError(
        error.message,
        coerceValue(operationOutcome(error.message, 'exception', 'error'), schema).value
      );
    }
    // if scopeChecker detected invalid scopes, add more to the message
    else if (errorType === 'forbidden') {
      let currentMessage = error.message;
      currentMessage += ` UserScopes: ${scopes}.`;
      currentMessage += ` Attempted ${action} on ${name}.`;

      return formatError(
        currentMessage,
        coerceValue(operationOutcome(currentMessage, 'forbidden', 'error'), schema).value
      );
    }
    // We are all clear
    else {
      return resolver(root, args, context, info);
    }
  };
};

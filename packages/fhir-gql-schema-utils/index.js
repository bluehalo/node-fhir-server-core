/**
 * @name extendSchema
 * @summary Extend Schemas
 * @description Can take a GraphQL Schema or a simple object.
 * This currently only grabs the type, description, and resolve properties.
 * We can add more properties as necessary.
 * @param {Array<Object>} args - Array of objects containing GraphQL fields or
 * GraphQL schemas
 * @return {Object} - An object containing fields for a GraphQL schema
 */
function extendSchema(...args) {
  return args.reduce((schema, arg) => {
    // If we have getFields, we have a GraphQL schema instead of JSON
    let fields = typeof arg.getFields === 'function' ? arg.getFields() : arg;

    let properties = Object.getOwnPropertyNames(fields);
    // Iterate over props and add each field to our schema
    properties.forEach((name) => {
      schema[name] = {
        type: fields[name].type,
        description: fields[name].description,
      };
      // Only add a resolver key if a resolver exists
      if (fields[name].resolve) {
        schema[name].resolve = fields[name].resolve;
      }
    });

    return schema;
  }, {});
}

module.exports = {
  extendSchema,
};

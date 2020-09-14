const { getSearchParams } = require('../utils/conformance.utils');
const { resolveSchema } = require('../utils/schema.utils');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
  resource: (baseVersion, key) => {
    let searchParams = getSearchParams(key, baseVersion);
    let Resource = resolveSchema(baseVersion, key);

    // Return our conformance statement
    return {
      type: Resource.resourceType,
      profile: {
        reference: `http://hl7.org/fhir/${key}.html`,
      },
      conditionalDelete: 'not-supported',
      searchParam: searchParams,
    };
  },
};

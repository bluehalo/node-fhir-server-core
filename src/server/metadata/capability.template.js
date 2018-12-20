const { getSearchParams } = require('../utils/conformance.utils');
const { resolveFromVersion } = require('../utils/resolve.utils');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	resource: (base_version, key) => {
		let searchParams = getSearchParams(key, base_version);
		let Resource = require(resolveFromVersion(base_version, key));

		// Return our conformance statement
		return {
			type: Resource.__resourceType,
			profile: {
				reference: `http://hl7.org/fhir/${key}.html`,
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams,
		};
	},
};

const { getSearchParams } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'organization',
	resource: (base, count) => {
		let searchParams = getSearchParams('organization');
		let Organization = require(resolveFromVersion(base, 'Organization'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Organization.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

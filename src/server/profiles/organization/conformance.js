const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./organization.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'organization',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./immunization.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'immunization',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Immunization = require(resolveFromVersion(base, 'Immunization'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Immunization.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

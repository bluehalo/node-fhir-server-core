const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./healthcareservice.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'healthcareservice',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let HealthcareService = require(resolveFromVersion(base, 'base/HealthcareService'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: HealthcareService.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/healthcareservice.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

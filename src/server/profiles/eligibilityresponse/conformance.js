const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./eligibilityresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'eligibilityresponse',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let EligibilityResponse = require(resolveFromVersion(version, 'base/EligibilityResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: EligibilityResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/eligibilityresponse.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

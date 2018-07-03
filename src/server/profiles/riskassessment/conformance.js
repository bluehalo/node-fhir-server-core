const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./riskassessment.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'riskassessment',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let RiskAssessment = require(resolveFromVersion(base, 'base/RiskAssessment'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: RiskAssessment.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/riskassessment.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

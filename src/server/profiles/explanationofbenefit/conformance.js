const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./explanationofbenefit.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'explanationofbenefit',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'base/ExplanationOfBenefit'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ExplanationOfBenefit.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/explanationofbenefit.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

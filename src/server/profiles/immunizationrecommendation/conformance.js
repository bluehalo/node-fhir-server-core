const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./immunizationrecommendation.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'immunizationrecommendation',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ImmunizationRecommendation = require(resolveFromVersion(base, 'ImmunizationRecommendation'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImmunizationRecommendation.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/immunizationrecommendation.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

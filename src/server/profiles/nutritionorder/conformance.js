const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./nutritionorder.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'nutritionorder',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let NutritionOrder = require(resolveFromVersion(base, 'base/NutritionOrder'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: NutritionOrder.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/nutritionorder.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

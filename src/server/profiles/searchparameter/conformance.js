const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./searchparameter.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'searchparameter',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let SearchParameter = require(resolveFromVersion(base, 'base/SearchParameter'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: SearchParameter.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/searchparameter.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

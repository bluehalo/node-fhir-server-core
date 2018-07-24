const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./measure.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'measure',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Measure = require(resolveFromVersion(base, 'Measure'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Measure.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/measure.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

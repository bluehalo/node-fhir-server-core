const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./measurereport.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'measurereport',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let MeasureReport = require(resolveFromVersion(base, 'base/MeasureReport'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MeasureReport.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/measurereport.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./measure.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'measure',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Measure = require(resolveFromVersion(version, 'base/Measure'));
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

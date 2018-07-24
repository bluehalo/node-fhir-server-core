const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicemetric.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'devicemetric',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let DeviceMetric = require(resolveFromVersion(base, 'DeviceMetric'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceMetric.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicemetric.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

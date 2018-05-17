const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicemetric.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'devicemetric',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceMetric = require(resolveFromVersion(version, 'base/DeviceMetric'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceMetric.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicemetric.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}],
			searchParam: searchParams
		};
	}
};

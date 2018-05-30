const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicerequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'devicerequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceRequest = require(resolveFromVersion(version, 'base/DeviceRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicerequest.html'
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

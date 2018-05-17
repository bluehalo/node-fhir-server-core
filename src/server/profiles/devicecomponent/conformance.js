const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicecomponent.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'devicecomponent',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceComponent = require(resolveFromVersion(version, 'base/DeviceComponent'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceComponent.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicecomponent.html'
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

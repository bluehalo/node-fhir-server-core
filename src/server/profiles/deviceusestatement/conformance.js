const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicestatement.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'devicestatement',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceStatement = require(resolveFromVersion(version, 'base/DeviceStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceStatement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicestatement.html'
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

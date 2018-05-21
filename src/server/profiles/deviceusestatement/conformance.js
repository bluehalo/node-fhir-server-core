const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./deviceusestatement.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'deviceusestatement',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceUseStatement = require(resolveFromVersion(version, 'base/DeviceUseStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceUseStatement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/deviceusestatement.html'
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./careteam.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'careteam',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CareTeam = require(resolveFromVersion(version, 'base/CareTeam'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CareTeam.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/careteam.html'
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

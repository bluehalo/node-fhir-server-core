const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./schedule.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'schedule',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Schedule = require(resolveFromVersion(version, 'base/Schedule'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Schedule.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/schedule.html'
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

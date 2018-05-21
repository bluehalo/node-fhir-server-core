const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./appointment.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'appointment',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Appointment = require(resolveFromVersion(version, 'base/Appointment'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Appointment.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/appointment.html'
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

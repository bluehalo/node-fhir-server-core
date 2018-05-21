const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./appointmentresponse.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'appointmentresponse',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let AppointmentResponse = require(resolveFromVersion(version, 'base/AppointmentResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: AppointmentResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/appointmentresponse.html'
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

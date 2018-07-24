const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./appointmentresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'appointmentresponse',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let AppointmentResponse = require(resolveFromVersion(base, 'AppointmentResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: AppointmentResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/appointmentresponse.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

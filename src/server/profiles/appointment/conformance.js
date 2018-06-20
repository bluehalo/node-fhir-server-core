const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./appointment.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'appointment',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Appointment = require(resolveFromVersion(base, 'base/Appointment'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Appointment.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/appointment.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

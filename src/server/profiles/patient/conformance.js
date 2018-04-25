const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { STU3 } = require('../../../constants');
const { routes } = require('./patient.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'patient',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: STU3.RESOURCE_TYPES.PATIENT,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Patient'
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

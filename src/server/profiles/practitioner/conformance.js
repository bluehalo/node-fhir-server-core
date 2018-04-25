const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { STU3 } = require('../../../constants');
const { routes } = require('./practitioner.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'practitioner',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: STU3.RESOURCE_TYPES.PRACTITIONER,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Practitioner'
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

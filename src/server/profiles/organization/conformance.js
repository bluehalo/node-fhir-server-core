const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { DSTU2 } = require('../../../constants');
const { routes } = require('./organization.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'organization',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DSTU2.RESOURCE_TYPES.ORGANIZATION,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Organization'
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

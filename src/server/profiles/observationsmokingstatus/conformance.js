const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./observationsmokingstatus.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'observationsmokingstatus',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ObservationSmokingStatus = require(resolveFromVersion(version, 'uscore/SmokingStatus'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ObservationSmokingStatus.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Observationsmokingstatus'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search-type'
			}],
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./observationresults.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'observationresults',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ObservationResults = require(resolveFromVersion(version, 'uscore/Results'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ObservationResults.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Observationresults'
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

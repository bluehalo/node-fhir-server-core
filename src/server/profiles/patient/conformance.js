const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./patient.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'patient',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Patient = require(resolveFromVersion(version, 'uscore/Patient'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Patient.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Patient'
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

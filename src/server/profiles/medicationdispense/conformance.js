const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./medicationdispense.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'medicationdispense',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let MedicationDispense = require(resolveFromVersion(version, 'base/MedicationDispense'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MedicationDispense.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/medicationdispense.html'
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

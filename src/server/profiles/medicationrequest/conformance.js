const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./medicationrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'medicationrequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let MedicationRequest = require(resolveFromVersion(version, 'uscore/MedicationRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MedicationRequest.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

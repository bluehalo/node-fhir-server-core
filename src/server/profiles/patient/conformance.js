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
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

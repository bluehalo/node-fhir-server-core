const { resolveFromVersion } = require('../../utils/resolve.utils');
const { getSearchParamaters } = require('../../utils/params.utils');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'patient',
	resource: (base, count) => {
		let searchParams = getSearchParamaters('patient');
		let Patient = require(resolveFromVersion(base, 'Patient'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
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

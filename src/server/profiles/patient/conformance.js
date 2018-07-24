const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./patient.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'patient',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
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

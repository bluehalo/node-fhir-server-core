const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./medicationstatement.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'medicationstatement',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let MedicationStatement = require(resolveFromVersion(base, 'MedicationStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MedicationStatement.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationstatement.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

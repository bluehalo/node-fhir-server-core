const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./medicationadministration.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'medicationadministration',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let MedicationAdministration = require(resolveFromVersion(base, 'MedicationAdministration'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MedicationAdministration.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/medicationadministration.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./clinicalimpression.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'clinicalimpression',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ClinicalImpression = require(resolveFromVersion(base, 'ClinicalImpression'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ClinicalImpression.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/clinicalimpression.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./clinicalimpression.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'clinicalimpression',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ClinicalImpression = require(resolveFromVersion(version, 'base/ClinicalImpression'));
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

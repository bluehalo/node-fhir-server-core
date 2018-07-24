const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./relatedperson.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'relatedperson',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let RelatedPerson = require(resolveFromVersion(base, 'RelatedPerson'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: RelatedPerson.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/relatedperson.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

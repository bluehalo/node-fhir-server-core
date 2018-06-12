const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./relatedperson.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'relatedperson',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let RelatedPerson = require(resolveFromVersion(version, 'base/RelatedPerson'));
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

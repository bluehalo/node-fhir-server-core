const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./person.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'person',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Person = require(resolveFromVersion(base, 'base/Person'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Person.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/person.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

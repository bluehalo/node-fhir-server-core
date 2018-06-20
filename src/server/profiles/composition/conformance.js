const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./composition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'composition',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Composition = require(resolveFromVersion(base, 'base/Composition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Composition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/composition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

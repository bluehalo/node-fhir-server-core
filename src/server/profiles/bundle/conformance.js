const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./bundle.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'bundle',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Bundle = require(resolveFromVersion(base, 'Bundle'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Bundle.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/bundle.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

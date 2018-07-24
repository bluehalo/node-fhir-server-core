const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./implementationguide.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'implementationguide',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ImplementationGuide = require(resolveFromVersion(base, 'ImplementationGuide'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImplementationGuide.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/implementationguide.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

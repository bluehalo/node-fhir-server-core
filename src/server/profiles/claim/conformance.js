const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./claim.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'claim',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Claim = require(resolveFromVersion(base, 'base/Claim'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Claim.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/claim.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./contract.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'contract',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Contract = require(resolveFromVersion(base, 'base/Contract'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Contract.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/contract.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

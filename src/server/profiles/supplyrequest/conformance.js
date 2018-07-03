const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./supplyrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'supplyrequest',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let SupplyRequest = require(resolveFromVersion(base, 'base/SupplyRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: SupplyRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/supplyrequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

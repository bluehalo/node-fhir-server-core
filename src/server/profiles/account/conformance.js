const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./account.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'account',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Account = require(resolveFromVersion(base, 'Account'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Account.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/account.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

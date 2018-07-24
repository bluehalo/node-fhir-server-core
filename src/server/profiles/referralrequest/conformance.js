const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./referralrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'referralrequest',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ReferralRequest = require(resolveFromVersion(base, 'ReferralRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ReferralRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/referralrequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

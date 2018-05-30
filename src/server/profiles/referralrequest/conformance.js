const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./referralrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'referralrequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ReferralRequest = require(resolveFromVersion(version, 'base/ReferralRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ReferralRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/referralrequest.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}],
			searchParam: searchParams
		};
	}
};

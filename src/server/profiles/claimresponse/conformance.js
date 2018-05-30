const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./claimresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'claimresponse',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ClaimResponse = require(resolveFromVersion(version, 'base/ClaimResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ClaimResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/claimresponse.html'
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

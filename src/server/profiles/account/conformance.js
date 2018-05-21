const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./account.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'account',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Account = require(resolveFromVersion(version, 'base/Account'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Account.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/account.html'
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

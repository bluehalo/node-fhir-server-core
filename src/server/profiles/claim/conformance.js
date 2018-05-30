const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./claim.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'claim',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Claim = require(resolveFromVersion(version, 'base/Claim'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Claim.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/claim.html'
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

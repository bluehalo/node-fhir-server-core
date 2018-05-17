const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./supplyrequest.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'supplyrequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let SupplyRequest = require(resolveFromVersion(version, 'base/SupplyRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: SupplyRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/supplyrequest.html'
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

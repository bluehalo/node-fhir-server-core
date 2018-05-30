const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./supplydelivery.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'supplydelivery',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: SupplyDelivery.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/supplydelivery.html'
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

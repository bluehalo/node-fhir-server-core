const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./paymentreconciliation.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'paymentreconciliation',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let PaymentReconciliation = require(resolveFromVersion(version, 'base/PaymentReconciliation'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: PaymentReconciliation.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/paymentreconciliation.html'
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

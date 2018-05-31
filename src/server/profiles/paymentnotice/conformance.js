const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./paymentnotice.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'paymentnotice',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let PaymentNotice = require(resolveFromVersion(version, 'base/PaymentNotice'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: PaymentNotice.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/paymentnotice.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

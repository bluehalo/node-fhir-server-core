const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./subscription.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'subscription',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Subscription = require(resolveFromVersion(base, 'Subscription'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Subscription.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/subscription.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

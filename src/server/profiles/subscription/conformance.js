const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./subscription.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'subscription',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Subscription = require(resolveFromVersion(version, 'base/Subscription'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Subscription.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/subscription.html'
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

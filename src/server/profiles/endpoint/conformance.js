const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./endpoint.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'endpoint',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Endpoint = require(resolveFromVersion(version, 'base/Endpoint'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Endpoint.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/endpoint.html'
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

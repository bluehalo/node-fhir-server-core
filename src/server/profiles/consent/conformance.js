const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./consent.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'consent',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Consent = require(resolveFromVersion(version, 'base/Consent'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Consent.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/consent.html'
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./provenance.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'provenance',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Provenance = require(resolveFromVersion(version, 'base/Provenance'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Provenance.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/provenance.html'
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

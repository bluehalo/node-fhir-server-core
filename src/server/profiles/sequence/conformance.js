const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./sequence.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'sequence',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Sequence = require(resolveFromVersion(version, 'base/Sequence'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Sequence.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/sequence.html'
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

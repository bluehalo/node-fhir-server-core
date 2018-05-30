const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./expansionprofile.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'expansionprofile',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ExpansionProfile = require(resolveFromVersion(version, 'base/ExpansionProfile'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ExpansionProfile.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/expansionprofile.html'
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./group.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'group',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Group = require(resolveFromVersion(version, 'base/Group'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Group.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/group.html'
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

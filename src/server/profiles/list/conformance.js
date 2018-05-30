const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./list.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'list',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let List = require(resolveFromVersion(version, 'base/List'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: List.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/list.html'
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

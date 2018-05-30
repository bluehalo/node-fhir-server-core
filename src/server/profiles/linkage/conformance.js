const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./linkage.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'linkage',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Linkage = require(resolveFromVersion(version, 'base/Linkage'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Linkage.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/linkage.html'
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./library.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'library',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Library = require(resolveFromVersion(version, 'base/Library'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Library.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/library.html'
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

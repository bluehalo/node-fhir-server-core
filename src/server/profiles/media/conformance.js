const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./media.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'media',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Media = require(resolveFromVersion(version, 'base/Media'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Media.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/media.html'
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

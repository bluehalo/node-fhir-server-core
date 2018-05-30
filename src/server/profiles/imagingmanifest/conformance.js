const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./imagingmanifest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'imagingmanifest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ImagingManifest = require(resolveFromVersion(version, 'base/ImagingManifest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImagingManifest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/imagingmanifest.html'
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

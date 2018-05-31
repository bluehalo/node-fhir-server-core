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
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImagingManifest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/imagingmanifest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./imagingstudy.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'imagingstudy',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImagingStudy.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/imagingstudy.html'
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

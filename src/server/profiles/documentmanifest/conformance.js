const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./documentmanifest.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'documentmanifest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DocumentManifest = require(resolveFromVersion(version, 'base/DocumentManifest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DocumentManifest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/documentmanifest.html'
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

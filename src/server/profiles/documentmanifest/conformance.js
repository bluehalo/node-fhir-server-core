const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./documentmanifest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'documentmanifest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DocumentManifest = require(resolveFromVersion(version, 'base/DocumentManifest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DocumentManifest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/documentmanifest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./detectedissue.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'detectedissue',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let DetectedIssue = require(resolveFromVersion(base, 'base/DetectedIssue'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DetectedIssue.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/detectedissue.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

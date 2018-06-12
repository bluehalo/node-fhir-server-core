const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./bodysite.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'bodysite',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: BodySite.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/bodysite.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

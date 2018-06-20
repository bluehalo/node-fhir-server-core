const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./researchstudy.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'researchstudy',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ResearchStudy = require(resolveFromVersion(version, 'base/ResearchStudy'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ResearchStudy.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/researchstudy.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

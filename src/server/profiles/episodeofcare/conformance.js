const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./episodeofcare.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'episodeofcare',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let EpisodeOfCare = require(resolveFromVersion(base, 'base/EpisodeOfCare'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: EpisodeOfCare.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/episodeofcare.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

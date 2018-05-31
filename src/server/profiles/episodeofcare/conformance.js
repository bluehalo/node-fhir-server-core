const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./episodeofcare.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'episodeofcare',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let EpisodeOfCare = require(resolveFromVersion(version, 'base/EpisodeOfCare'));
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

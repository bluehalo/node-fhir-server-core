const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./episodeofcare.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'episodeofcare',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let EpisodeOfCare = require(resolveFromVersion(version, 'base/EpisodeOfCare'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: EpisodeOfCare.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/episodeofcare.html'
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

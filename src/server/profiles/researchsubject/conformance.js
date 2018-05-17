const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./researchsubject.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'researchsubject',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ResearchSubject = require(resolveFromVersion(version, 'base/ResearchSubject'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ResearchSubject.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/researchsubject.html'
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

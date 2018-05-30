const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./immunizationrecommendation.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'immunizationrecommendation',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImmunizationRecommendation.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/immunizationrecommendation.html'
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

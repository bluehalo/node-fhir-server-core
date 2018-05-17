const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./riskassessment.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'riskassessment',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let RiskAssessment = require(resolveFromVersion(version, 'base/RiskAssessment'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: RiskAssessment.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/riskassessment.html'
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

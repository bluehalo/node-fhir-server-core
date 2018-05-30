const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./explanationofbenefit.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'explanationofbenefit',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'base/ExplanationOfBenefit'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ExplanationOfBenefit.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/explanationofbenefit.html'
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

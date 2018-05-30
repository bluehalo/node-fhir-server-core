const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./questionnaireresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'questionnaireresponse',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: QuestionnaireResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/questionnaireresponse.html'
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

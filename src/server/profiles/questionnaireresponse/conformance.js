const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./questionnaireresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'questionnaireresponse',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let QuestionnaireResponse = require(resolveFromVersion(base, 'base/QuestionnaireResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: QuestionnaireResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/questionnaireresponse.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

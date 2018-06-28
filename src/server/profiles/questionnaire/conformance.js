const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./questionnaire.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'questionnaire',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Questionnaire = require(resolveFromVersion(base, 'base/Questionnaire'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Questionnaire.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/questionnaire.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

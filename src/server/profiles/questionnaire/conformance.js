const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./questionnaire.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'questionnaire',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Questionnaire.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/questionnaire.html'
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./activitydefinition.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'activitydefinition',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ActivityDefinition = require(resolveFromVersion(version, 'base/ActivityDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ActivityDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/activitydefinition.html'
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

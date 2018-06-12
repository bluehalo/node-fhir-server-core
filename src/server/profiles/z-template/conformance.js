const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./activitydefinition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'activitydefinition',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ActivityDefinition = require(resolveFromVersion(version, 'base/ActivityDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ActivityDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/activitydefinition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

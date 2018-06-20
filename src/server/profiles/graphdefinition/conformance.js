const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./graphdefinition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'graphdefinition',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let GraphDefinition = require(resolveFromVersion(base, 'base/GraphDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: GraphDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/graphdefinition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

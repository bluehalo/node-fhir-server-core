const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./graphdefinition.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'graphdefinition',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let GraphDefinition = require(resolveFromVersion(version, 'base/GraphDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: GraphDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/graphdefinition.html'
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

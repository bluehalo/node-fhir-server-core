const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./compartmentdefinition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'compartmentdefinition',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CompartmentDefinition = require(resolveFromVersion(version, 'base/CompartmentDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CompartmentDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/compartmentdefinition.html'
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

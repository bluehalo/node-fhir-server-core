const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./immunization.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'immunization',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Immunization.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search-type'
			}],
			searchParam: searchParams
		};
	}
};

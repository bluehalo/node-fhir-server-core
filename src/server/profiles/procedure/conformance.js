const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./procedure.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'procedure',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Procedure.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-procedure.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

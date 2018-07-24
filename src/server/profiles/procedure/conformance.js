const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./procedure.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'procedure',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Procedure = require(resolveFromVersion(base, 'Procedure'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
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

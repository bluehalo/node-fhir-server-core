const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./condition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'condition',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Condition = require(resolveFromVersion(base, 'uscore/Condition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Condition.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-condition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

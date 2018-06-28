const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./compartmentdefinition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'compartmentdefinition',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let CompartmentDefinition = require(resolveFromVersion(base, 'base/CompartmentDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CompartmentDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/compartmentdefinition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

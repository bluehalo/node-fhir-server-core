const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./encounter.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'encounter',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Encounter = require(resolveFromVersion(base, 'Encounter'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Encounter.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/encounter.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./careteam.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'careteam',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let CareTeam = require(resolveFromVersion(base, 'CareTeam'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CareTeam.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-careteam.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./goal.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'goal',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Goal = require(resolveFromVersion(base, 'uscore/Goal'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Goal.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/goal.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

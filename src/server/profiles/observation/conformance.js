const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./observation.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'observation',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Observation = require(resolveFromVersion(version, 'uscore/Observation'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Observation.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/observation.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

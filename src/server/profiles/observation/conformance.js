const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./observation.config');

/**
 * @name exports
 * @summary Observation conformance statement
 */
module.exports = {
	profile: 'observation',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Observation = require(resolveFromVersion(version, 'uscore/Observation'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Observation.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Observation'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

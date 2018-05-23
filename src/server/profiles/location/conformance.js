const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./location.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'location',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Location = require(resolveFromVersion(version, 'uscore/Location'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Location.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-location.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

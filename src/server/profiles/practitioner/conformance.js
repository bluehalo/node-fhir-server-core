const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./practitioner.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'practitioner',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Practitioner.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}],
			searchParam: searchParams
		};
	}
};

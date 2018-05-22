const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./medication.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'medication',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Medication = require(resolveFromVersion(version, 'uscore/Medication'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Medication.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medication.html'
			},
			conditionalDelete: 'not-supported',
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}, {
				code: 'update'
			}, {
				code: 'create'
			}, {
				code: 'delete'
			}],
			searchParam: searchParams
		};
	}
};

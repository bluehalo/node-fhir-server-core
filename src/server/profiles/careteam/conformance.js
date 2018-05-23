const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./careteam.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'careteam',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CareTeam.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-careteam.html'
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

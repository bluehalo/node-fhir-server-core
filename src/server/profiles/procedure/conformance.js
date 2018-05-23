const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./procedure.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'procedure',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Procedure.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Procedure'
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

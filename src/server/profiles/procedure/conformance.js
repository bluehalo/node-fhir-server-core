const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./procedure.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'procedure',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Procedure = require(resolveFromVersion(version, 'base/Procedure'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Procedure.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/procedure.html'
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

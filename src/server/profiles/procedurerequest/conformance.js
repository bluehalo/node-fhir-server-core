const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./procedurerequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'procedurerequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ProcedureRequest = require(resolveFromVersion(version, 'base/ProcedureRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ProcedureRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/procedurerequest.html'
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

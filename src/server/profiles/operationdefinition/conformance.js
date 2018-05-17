const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./operationdefinition.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'operationdefinition',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let OperationDefinition = require(resolveFromVersion(version, 'base/OperationDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: OperationDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/operationdefinition.html'
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

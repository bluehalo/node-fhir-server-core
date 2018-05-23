const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./device.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'device',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Device = require(resolveFromVersion(version, 'uscore/Device'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Device.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-device.html'
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

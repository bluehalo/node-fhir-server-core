const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./device.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'device',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Device = require(resolveFromVersion(base, 'uscore/Device'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Device.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-device.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

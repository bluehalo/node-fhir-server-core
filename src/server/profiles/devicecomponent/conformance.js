const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicecomponent.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'devicecomponent',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceComponent = require(resolveFromVersion(version, 'base/DeviceComponent'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceComponent.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicecomponent.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

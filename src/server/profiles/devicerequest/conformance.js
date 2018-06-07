const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./devicerequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'devicerequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DeviceRequest = require(resolveFromVersion(version, 'base/DeviceRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/devicerequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./deviceusestatement.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'deviceusestatement',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let DeviceUseStatement = require(resolveFromVersion(base, 'base/DeviceUseStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DeviceUseStatement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/deviceusestatement.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

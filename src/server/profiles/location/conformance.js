const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./location.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'location',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Location = require(resolveFromVersion(version, 'uscore/Location'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Location.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/location.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

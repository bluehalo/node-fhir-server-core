const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./namingsystem.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'namingsystem',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let NamingSystem = require(resolveFromVersion(base, 'NamingSystem'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: NamingSystem.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/namingsystem.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

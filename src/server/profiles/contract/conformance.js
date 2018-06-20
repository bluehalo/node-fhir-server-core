const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./contract.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'contract',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Contract = require(resolveFromVersion(version, 'base/Contract'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Contract.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/contract.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

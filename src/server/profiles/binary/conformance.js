const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./binary.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'binary',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Binary = require(resolveFromVersion(version, 'base/Binary'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Binary.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/binary.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

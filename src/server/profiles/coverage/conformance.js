const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./coverage.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'coverage',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Coverage = require(resolveFromVersion(version, 'base/Coverage'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Coverage.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/coverage.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

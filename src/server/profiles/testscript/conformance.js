const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./testscript.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'testscript',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let TestScript = require(resolveFromVersion(version, 'base/TestScript'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: TestScript.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/testscript.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

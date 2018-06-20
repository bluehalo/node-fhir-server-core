const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./codesystem.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'codesystem',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let CodeSystem = require(resolveFromVersion(base, 'base/CodeSystem'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CodeSystem.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/codesystem.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

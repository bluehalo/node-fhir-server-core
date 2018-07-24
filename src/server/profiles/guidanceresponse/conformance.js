const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./guidanceresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'guidanceresponse',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let GuidanceResponse = require(resolveFromVersion(base, 'GuidanceResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: GuidanceResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/guidanceresponse.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

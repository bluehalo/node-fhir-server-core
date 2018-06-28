const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./processresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'processresponse',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ProcessResponse = require(resolveFromVersion(base, 'base/ProcessResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ProcessResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/processresponse.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

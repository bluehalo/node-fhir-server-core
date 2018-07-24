const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./processrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'processrequest',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ProcessRequest = require(resolveFromVersion(base, 'ProcessRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ProcessRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/processrequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

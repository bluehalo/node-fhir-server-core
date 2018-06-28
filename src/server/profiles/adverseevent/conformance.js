const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./adverseevent.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'adverseevent',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let AdverseEvent = require(resolveFromVersion(base, 'base/AdverseEvent'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: AdverseEvent.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/adverseevent.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./sequence.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'sequence',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Sequence = require(resolveFromVersion(base, 'base/Sequence'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Sequence.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/sequence.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./sequence.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'sequence',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Sequence = require(resolveFromVersion(version, 'base/Sequence'));
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

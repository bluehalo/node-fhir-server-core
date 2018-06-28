const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./slot.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'slot',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Slot = require(resolveFromVersion(base, 'base/Slot'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Slot.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/slot.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

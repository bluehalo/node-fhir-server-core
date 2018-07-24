const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./valueset.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'valueset',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ValueSet = require(resolveFromVersion(base, 'ValueSet'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ValueSet.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/valueset.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

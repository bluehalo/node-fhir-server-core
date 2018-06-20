const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./documentreference.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'documentreference',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let DocumentReference = require(resolveFromVersion(base, 'base/DocumentReference'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DocumentReference.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/documentreference.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

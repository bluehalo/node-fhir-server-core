const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./documentreference.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'documentreference',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DocumentReference = require(resolveFromVersion(version, 'base/DocumentReference'));
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

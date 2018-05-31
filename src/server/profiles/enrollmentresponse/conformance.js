const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./enrollmentresponse.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'enrollmentresponse',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let EnrollmentResponse = require(resolveFromVersion(version, 'base/EnrollmentResponse'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: EnrollmentResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/enrollmentresponse.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

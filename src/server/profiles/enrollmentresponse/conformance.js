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
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: EnrollmentResponse.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/enrollmentresponse.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}],
			searchParam: searchParams
		};
	}
};

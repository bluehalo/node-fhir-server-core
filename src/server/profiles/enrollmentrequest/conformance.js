const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./enrollmentrequest.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'enrollmentrequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let EnrollmentRequest = require(resolveFromVersion(version, 'base/EnrollmentRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: EnrollmentRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/enrollmentrequest.html'
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

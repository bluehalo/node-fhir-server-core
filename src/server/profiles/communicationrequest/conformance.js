const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./communicationrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'communicationrequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CommunicationRequest = require(resolveFromVersion(version, 'base/CommunicationRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CommunicationRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/communicationrequest.html'
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

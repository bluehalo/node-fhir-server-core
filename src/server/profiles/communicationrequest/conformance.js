const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./communicationrequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'communicationrequest',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let CommunicationRequest = require(resolveFromVersion(base, 'base/CommunicationRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CommunicationRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/communicationrequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

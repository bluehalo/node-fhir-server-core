const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./communication.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'communication',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Communication = require(resolveFromVersion(version, 'base/Communication'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Communication.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/communication.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

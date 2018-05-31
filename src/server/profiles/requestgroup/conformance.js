const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./requestgroup.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'requestgroup',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let RequestGroup = require(resolveFromVersion(version, 'base/RequestGroup'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: RequestGroup.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/requestgroup.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

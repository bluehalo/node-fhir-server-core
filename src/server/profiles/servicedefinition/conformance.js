const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./servicedefinition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'servicedefinition',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ServiceDefinition = require(resolveFromVersion(base, 'base/ServiceDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ServiceDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/servicedefinition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

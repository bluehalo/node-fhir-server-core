const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./substance.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'substance',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Substance = require(resolveFromVersion(version, 'base/Substance'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Substance.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/substance.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

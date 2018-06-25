const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./linkage.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'linkage',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Linkage = require(resolveFromVersion(version, 'base/Linkage'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Linkage.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/linkage.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./expansionprofile.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'expansionprofile',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ExpansionProfile = require(resolveFromVersion(base, 'base/ExpansionProfile'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ExpansionProfile.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/expansionprofile.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

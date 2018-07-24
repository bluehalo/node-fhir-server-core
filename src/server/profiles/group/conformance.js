const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./group.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'group',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Group = require(resolveFromVersion(base, 'Group'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Group.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/group.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

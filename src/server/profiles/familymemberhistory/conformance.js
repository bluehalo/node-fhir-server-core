const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./familymemberhistory.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'familymemberhistory',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let FamilyMemberHistory = require(resolveFromVersion(base, 'base/FamilyMemberHistory'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: FamilyMemberHistory.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/familymemberhistory.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

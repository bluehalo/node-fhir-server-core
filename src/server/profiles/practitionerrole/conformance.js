const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./practitionerrole.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'practitionerrole',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let PractitionerRole = require(resolveFromVersion(version, 'base/PractitionerRole'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: PractitionerRole.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/practitionerrole.html'
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

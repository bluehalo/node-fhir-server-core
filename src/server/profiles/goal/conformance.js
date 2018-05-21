const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./goal.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'goal',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Goal.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/goal.html'
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

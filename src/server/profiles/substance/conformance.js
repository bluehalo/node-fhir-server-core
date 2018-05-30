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
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Substance.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/substance.html'
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

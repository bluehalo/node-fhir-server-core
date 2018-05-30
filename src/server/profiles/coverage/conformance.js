const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./coverage.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'coverage',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Coverage = require(resolveFromVersion(version, 'base/Coverage'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Coverage.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/coverage.html'
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

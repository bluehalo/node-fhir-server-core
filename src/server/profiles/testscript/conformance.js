const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./testscript.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'testscript',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let TestScript = require(resolveFromVersion(version, 'base/TestScript'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: TestScript.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/testscript.html'
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

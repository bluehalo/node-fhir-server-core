const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./codesystem.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'codesystem',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CodeSystem = require(resolveFromVersion(version, 'base/CodeSystem'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CodeSystem.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/codesystem.html'
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

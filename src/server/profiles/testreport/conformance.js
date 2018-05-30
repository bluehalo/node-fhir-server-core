const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./testreport.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'testreport',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let TestReport = require(resolveFromVersion(version, 'base/TestReport'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: TestReport.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/testreport.html'
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

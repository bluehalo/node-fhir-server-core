const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./measurereport.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'measurereport',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let MeasureReport = require(resolveFromVersion(version, 'base/MeasureReport'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MeasureReport.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/measurereport.html'
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

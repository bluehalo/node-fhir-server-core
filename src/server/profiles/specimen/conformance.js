const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./specimen.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'specimen',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Specimen = require(resolveFromVersion(version, 'base/Specimen'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Specimen.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/specimen.html'
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

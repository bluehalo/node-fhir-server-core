const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./binary.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'binary',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Binary = require(resolveFromVersion(version, 'base/Binary'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Binary.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/binary.html'
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

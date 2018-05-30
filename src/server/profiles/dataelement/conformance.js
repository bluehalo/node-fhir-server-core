const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./dataelement.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'dataelement',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DataElement = require(resolveFromVersion(version, 'base/DataElement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DataElement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/dataelement.html'
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

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { DSTU2 } = require('../../../constants');
const { routes } = require('./allergyintolerance.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'allergyintolerance',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DSTU2.RESOURCE_TYPES.ALLERGYINTOLERANCE,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html'
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

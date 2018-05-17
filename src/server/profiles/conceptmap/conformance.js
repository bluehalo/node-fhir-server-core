const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./conceptmap.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'conceptmap',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ConceptMap = require(resolveFromVersion(version, 'base/ConceptMap'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ConceptMap.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/conceptmap.html'
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

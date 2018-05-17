const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./valueset.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'valueset',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ValueSet = require(resolveFromVersion(version, 'base/ValueSet'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ValueSet.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/valueset.html'
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

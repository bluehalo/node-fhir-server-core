const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./capabilitystatement.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'capabilitystatement',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CapabilityStatement = require(resolveFromVersion(version, 'base/CapabilityStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CapabilityStatement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/capabilitystatement.html'
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

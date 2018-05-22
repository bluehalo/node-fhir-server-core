const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./organization.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'organization',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Organization.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/Profile/Organization'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}, {
				code: 'update'
			}, {
				code: 'create'
			}],
			searchParam: searchParams
		};
	}
};

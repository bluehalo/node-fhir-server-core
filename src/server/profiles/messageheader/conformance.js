const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./messageheader.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'messageheader',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MessageHeader.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/messageheader.html'
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

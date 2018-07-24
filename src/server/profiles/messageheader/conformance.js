const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./messageheader.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'messageheader',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let MessageHeader = require(resolveFromVersion(base, 'MessageHeader'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MessageHeader.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/messageheader.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

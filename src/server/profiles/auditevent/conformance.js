const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./auditevent.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'auditevent',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let AuditEvent = require(resolveFromVersion(base, 'uscore/AuditEvent'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: AuditEvent.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/auditevent.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

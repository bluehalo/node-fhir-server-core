const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./diagnosticreport.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'diagnosticreport',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let DiagnosticReport = require(resolveFromVersion(base, 'DiagnosticReport'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DiagnosticReport.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

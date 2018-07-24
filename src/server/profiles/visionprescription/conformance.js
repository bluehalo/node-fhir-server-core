const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./visionprescription.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'visionprescription',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let VisionPrescription = require(resolveFromVersion(base, 'VisionPrescription'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: VisionPrescription.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/visionprescription.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

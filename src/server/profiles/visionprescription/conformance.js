const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./visionprescription.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'visionprescription',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let VisionPrescription = require(resolveFromVersion(version, 'base/VisionPrescription'));
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

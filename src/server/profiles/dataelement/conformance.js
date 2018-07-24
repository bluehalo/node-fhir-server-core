const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./dataelement.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'dataelement',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let DataElement = require(resolveFromVersion(base, 'DataElement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DataElement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/dataelement.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

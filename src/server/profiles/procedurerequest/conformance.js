const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./procedurerequest.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'procedurerequest',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ProcedureRequest = require(resolveFromVersion(version, 'base/ProcedureRequest'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ProcedureRequest.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/procedurerequest.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

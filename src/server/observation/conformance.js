const { DSTU2 } = require('../../constants');

/**
 * @name exports
 * @summary Observation conformance statement
 */

module.exports = {
	Profile: 'observation',
	Resource: (count) => ({
		extension: [{
			url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
			// This will be resolved dynamically by the service methods
			valueDecimal: count
		}],
		type: DSTU2.RESOURCE_TYPES.OBSERVATION,
		profile: {
			reference: 'http://hl7.org/fhir/Profile/Observation'
		},
		interaction: [{
			code: 'read'
		}, {
			code: 'search'
		}],
		searchParam: []
	})
};

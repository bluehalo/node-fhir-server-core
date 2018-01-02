const path = require('path');
const { DSTU2 } = require(path.resolve('./src/constants'));

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
		searchParam: [{
			name: 'category',
			type: 'token',
			definition: 'The classification of the type of observation'
		}, {
			name: 'code',
			type: 'token',
			definition: 'The code of the observation type'
		}, {
			name: 'date',
			type: 'date',
			definition: 'Obtained date/time. If the obtained element is a period, a date that falls in the period'
		}, {
			name: 'patient',
			type: 'reference',
			definition: 'The subject that the observation is about (if patient)'
		}]
	})
};

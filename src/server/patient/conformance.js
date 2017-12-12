const path = require('path');
const { DSTU2 } = require(path.resolve('./src/constants'));

/**
 * @name exports
 * @summary Patient conformance statement
 */

module.exports = {
	Profile: 'patient',
	Resource: (count) => ({
		extension: [{
			url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
			// This will be resolved dynamically by the service methods
			valueDecimal: count
		}],
		type: DSTU2.RESOURCE_TYPES.PATIENT,
		profile: {
			reference: 'http://hl7.org/fhir/Profile/Patient'
		},
		interaction: [{
			code: 'read'
		}, {
			code: 'search'
		}],
		searchParam: [{
			name: 'id',
			type: 'token',
			definition: 'Id of the patient'
		}, {
			name: 'name',
			type: 'string',
			definition: 'Name of the patient'
		}, {
			name: 'birthdate',
			type: 'date',
			definition: 'Birthdate of the patient'
		}, {
			name: 'gender',
			type: 'token',
			definition: 'Gender of the patient'
		}, {
			name: 'given',
			type: 'string',
			definition: 'A portion of the given name of the patient'
		}, {
			name: 'family',
			type: 'string',
			definition: 'A portion of the family name of the patient'
		}, {
			name: 'identifier',
			type: 'token',
			definition: 'A patient identifier'
		}]
	})
};

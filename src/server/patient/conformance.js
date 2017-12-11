/**
 * @name exports
 * @summary Patient conformance statement
 */

module.exports = {
	extension: [{
		url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
		// This will be resolved dynamically by the service methods
		valueDecimal: 0
	}],
	type: 'Patient',
	profile: {
		reference: 'http://hl7.org/fhir/Profile/Patient'
	},
	interaction: [{
		code: 'read'
	}, {
		code: 'vread'
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
};
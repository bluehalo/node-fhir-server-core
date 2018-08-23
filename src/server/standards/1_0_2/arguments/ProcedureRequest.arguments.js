module.exports = {
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-encounter',
		description: 'Encounter request created during.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-identifier',
		description: 'A unique identifier of the Procedure Request.',
	},
	ORDERER: {
		name: 'orderer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-orderer',
		description: 'Who made request.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-patient',
		description: 'Search by subject - a patient.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer',
		description: 'Who should perform the procedure.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject',
		description: 'Search by subject.',
	},
};

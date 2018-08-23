module.exports = {
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-encounter',
		description: 'Encounter request created during.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-identifier',
		description: 'A unique identifier of the Procedure Request.',
	},
	ORDERER: {
		name: 'Orderer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-orderer',
		description: 'Who made request.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-patient',
		description: 'Search by subject - a patient.',
	},
	PERFORMER: {
		name: 'Performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer',
		description: 'Who should perform the procedure.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject',
		description: 'Search by subject.',
	},
};

module.exports = {
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-encounter',
		documentation: 'Encounter request created during.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-identifier',
		documentation: 'A unique identifier of the Procedure Request.',
	},
	ORDERER: {
		name: 'orderer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-orderer',
		documentation: 'Who made request.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-patient',
		documentation: 'Search by subject - a patient.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer',
		documentation: 'Who should perform the procedure.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject',
		documentation: 'Search by subject.',
	},
};

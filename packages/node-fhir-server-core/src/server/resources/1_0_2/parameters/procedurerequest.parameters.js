/**
 * @name exports
 * @static
 * @summary Arguments for the procedurerequest query
 */
module.exports = {
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-encounter',
		description: 'Encounter request created during',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ProcedureRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-identifier',
		description: 'A unique identifier of the Procedure Request',
	},
	orderer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.orderer',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-orderer',
		description: 'Who made request',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-patient',
		description: 'Search by subject - a patient',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer',
		description: 'Who should perform the procedure',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject',
		description: 'Search by subject',
	},
};

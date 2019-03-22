/**
 * @name exports
 * @static
 * @summary Arguments for the procedure query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Procedure.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-code',
		description: 'A code to identify a  procedure',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Procedure.performedDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-date',
		description: 'Date/Period the procedure was performed',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Procedure.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-encounter',
		description: 'The encounter associated with the procedure',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Procedure.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-identifier',
		description: 'A unique identifier for a procedure',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Procedure.location',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-location',
		description: 'Where the procedure happened',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Procedure.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-patient',
		description: 'Search by subject - a patient',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Procedure.performer.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-performer',
		description: 'The reference to the practitioner',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Procedure.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-subject',
		description: 'Search by subject',
	},
};

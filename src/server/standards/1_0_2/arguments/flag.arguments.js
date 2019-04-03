/**
 * @name exports
 * @static
 * @summary Arguments for the flag query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Flag.author',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-author',
		description: 'Flag creator',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Flag.period',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-date',
		description: 'Time period when flag is active',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Flag.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-encounter',
		description: 'Alert relevant during encounter',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Flag.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-patient',
		description: 'The identity of a subject to list flags for',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Flag.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Flag-subject',
		description: 'The identity of a subject to list flags for',
	},
};

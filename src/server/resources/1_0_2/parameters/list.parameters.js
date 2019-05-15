/**
 * @name exports
 * @static
 * @summary Arguments for the list query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'List.code',
		definition: 'http://hl7.org/fhir/SearchParameter/List-code',
		description: 'What the purpose of this list is',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'List.date',
		definition: 'http://hl7.org/fhir/SearchParameter/List-date',
		description: 'When the list was prepared',
	},
	'empty-reason': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'List.emptyReason',
		definition: 'http://hl7.org/fhir/SearchParameter/List-empty-reason',
		description: 'Why list is empty',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'List.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/List-encounter',
		description: 'Context in which list created',
	},
	item: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'List.entry.item',
		definition: 'http://hl7.org/fhir/SearchParameter/List-item',
		description: 'Actual entry',
	},
	notes: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'List.note',
		definition: 'http://hl7.org/fhir/SearchParameter/List-notes',
		description: 'Comments about the list',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'List.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/List-patient',
		description: 'If all resources have the same subject',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'List.source',
		definition: 'http://hl7.org/fhir/SearchParameter/List-source',
		description: 'Who and/or what defined the list contents (aka Author)',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'List.status',
		definition: 'http://hl7.org/fhir/SearchParameter/List-status',
		description: 'current | retired | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'List.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/List-subject',
		description: 'If all resources have the same subject',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'List.title',
		definition: 'http://hl7.org/fhir/SearchParameter/List-title',
		description: 'Descriptive name for the list',
	},
};

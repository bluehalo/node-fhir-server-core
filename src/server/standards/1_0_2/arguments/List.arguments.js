module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/List-code',
		description: 'What the purpose of this list is.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/List-date',
		description: 'When the list was prepared.',
	},
	EMPTY_REASON: {
		name: 'empty-reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/List-empty-reason',
		description: 'Why list is empty.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-encounter',
		description: 'Context in which list created.',
	},
	ITEM: {
		name: 'item',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-item',
		description: 'Actual entry.',
	},
	NOTES: {
		name: 'notes',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/List-notes',
		description: 'Comments about the list.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-patient',
		description: 'If all resources have the same subject.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-source',
		description: 'Who and/or what defined the list contents (aka Author).',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/List-status',
		description: 'current | retired | entered-in-error.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-subject',
		description: 'If all resources have the same subject.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/List-title',
		description: 'Descriptive name for the list.',
	},
};

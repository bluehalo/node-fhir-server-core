module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/List-code',
		documentation: 'What the purpose of this list is.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/List-date',
		documentation: 'When the list was prepared.',
	},
	EMPTY_REASON: {
		name: 'empty-reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/List-empty-reason',
		documentation: 'Why list is empty.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-encounter',
		documentation: 'Context in which list created.',
	},
	ITEM: {
		name: 'item',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-item',
		documentation: 'Actual entry.',
	},
	NOTES: {
		name: 'notes',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/List-notes',
		documentation: 'Comments about the list.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-patient',
		documentation: 'If all resources have the same subject.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-source',
		documentation: 'Who and/or what defined the list contents (aka Author).',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/List-status',
		documentation: 'current | retired | entered-in-error.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/List-subject',
		documentation: 'If all resources have the same subject.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/List-title',
		documentation: 'Descriptive name for the list.',
	},
};

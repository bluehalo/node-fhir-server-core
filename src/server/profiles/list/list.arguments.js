/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'What the purpose of this list is',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'When the list was prepared',
	},
	EMPTY_REASON: {
		name: 'empty-reason',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'Why list is empty',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'Context in which list created',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'Business identifier',
	},
	ITEM: {
		name: 'item',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'Actual entry',
	},
	NOTES: {
		name: 'notes',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'The annotation - text content',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'If all resources have the same subject',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'Who and/or what defined the list contents (aka Author)',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'current | retired | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'If all resources have the same subject',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#list',
		documentation: 'Descriptive name for the list',
	},
};

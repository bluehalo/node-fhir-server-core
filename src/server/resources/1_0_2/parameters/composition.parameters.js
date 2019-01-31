/**
 * @name exports
 * @static
 * @summary Arguments for the composition query
 */
module.exports = {
	attester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Composition.attester.party',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-attester',
		description: 'Who attested the composition',
	},
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Composition.author',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-author',
		description: 'Who and/or what authored the composition',
	},
	class: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.class',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-class',
		description: 'Categorization of Composition',
	},
	confidentiality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.confidentiality',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-confidentiality',
		description: 'As defined by affinity domain',
	},
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.event.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-context',
		description: 'Code(s) that apply to the event being documented',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Composition.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-date',
		description: 'Composition editing time',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Composition.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-encounter',
		description: 'Context of the Composition',
	},
	entry: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Composition.section.entry',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-entry',
		description: 'A reference to data that supports this section',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-identifier',
		description: 'Logical identifier of composition (version-independent)',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Composition.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-patient',
		description: 'Who and/or what the composition is about',
	},
	period: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Composition.event.period',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-period',
		description: 'The period covered by the documentation',
	},
	section: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.section.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-section',
		description: 'Classification of section (recommended)',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-status',
		description: 'preliminary | final | amended | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Composition.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-subject',
		description: 'Who and/or what the composition is about',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Composition.title',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-title',
		description: 'Human Readable name/title',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Composition.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Composition-type',
		description: 'Kind of composition (LOINC if possible)',
	},
};

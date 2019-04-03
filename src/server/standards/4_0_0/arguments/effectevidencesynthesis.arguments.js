/**
 * @name exports
 * @static
 * @summary Arguments for the effectevidencesynthesis query
 */
module.exports = {
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.useContext.valueCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context',
		description: 'A use context assigned to the effect evidence synthesis',
	},
	'context-quantity': {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'EffectEvidenceSynthesis.useContext.valueQuantity',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-quantity',
		description: 'A quantity- or range-valued use context assigned to the effect evidence synthesis',
	},
	'context-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.useContext.code',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type',
		description: 'A type of use context assigned to the effect evidence synthesis',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'EffectEvidenceSynthesis.date',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-date',
		description: 'The effect evidence synthesis publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.description',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-description',
		description: 'The description of the effect evidence synthesis',
	},
	effective: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'EffectEvidenceSynthesis.effectivePeriod',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-effective',
		description: 'The time during which the effect evidence synthesis is intended to be in use',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-identifier',
		description: 'External identifier for the effect evidence synthesis',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-jurisdiction',
		description: 'Intended jurisdiction for the effect evidence synthesis',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.name',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-name',
		description: 'Computationally friendly name of the effect evidence synthesis',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-publisher',
		description: 'Name of the publisher of the effect evidence synthesis',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.status',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-status',
		description: 'The current status of the effect evidence synthesis',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.title',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-title',
		description: 'The human-friendly name of the effect evidence synthesis',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'EffectEvidenceSynthesis.url',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-url',
		description: 'The uri that identifies the effect evidence synthesis',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.version',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-version',
		description: 'The business version of the effect evidence synthesis',
	},
	'context-type-quantity': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type-quantity',
		description: 'A use context type and quantity- or range-based value assigned to the effect evidence synthesis',
	},
	'context-type-value': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type-value',
		description: 'A use context type and value assigned to the effect evidence synthesis',
	},
};

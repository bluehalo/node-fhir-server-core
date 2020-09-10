/**
 * @name exports
 * @static
 * @summary Arguments for the riskevidencesynthesis query
 */
module.exports = {
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.useContext.valueCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context',
		description: 'A use context assigned to the risk evidence synthesis',
	},
	'context-quantity': {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'RiskEvidenceSynthesis.useContext.valueQuantity',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-quantity',
		description: 'A quantity- or range-valued use context assigned to the risk evidence synthesis',
	},
	'context-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.useContext.code',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type',
		description: 'A type of use context assigned to the risk evidence synthesis',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'RiskEvidenceSynthesis.date',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-date',
		description: 'The risk evidence synthesis publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.description',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-description',
		description: 'The description of the risk evidence synthesis',
	},
	effective: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'RiskEvidenceSynthesis.effectivePeriod',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-effective',
		description: 'The time during which the risk evidence synthesis is intended to be in use',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-identifier',
		description: 'External identifier for the risk evidence synthesis',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-jurisdiction',
		description: 'Intended jurisdiction for the risk evidence synthesis',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.name',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-name',
		description: 'Computationally friendly name of the risk evidence synthesis',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-publisher',
		description: 'Name of the publisher of the risk evidence synthesis',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.status',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-status',
		description: 'The current status of the risk evidence synthesis',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.title',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-title',
		description: 'The human-friendly name of the risk evidence synthesis',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'RiskEvidenceSynthesis.url',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-url',
		description: 'The uri that identifies the risk evidence synthesis',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.version',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-version',
		description: 'The business version of the risk evidence synthesis',
	},
	'context-type-quantity': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-quantity',
		description: 'A use context type and quantity- or range-based value assigned to the risk evidence synthesis',
	},
	'context-type-value': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-value',
		description: 'A use context type and value assigned to the risk evidence synthesis',
	},
};

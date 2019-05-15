/**
 * @name exports
 * @static
 * @summary Arguments for the chargeitemdefinition query
 */
module.exports = {
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.useContext.valueCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context',
		description: 'A use context assigned to the charge item definition',
	},
	'context-quantity': {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'ChargeItemDefinition.useContext.valueQuantity',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-quantity',
		description: 'A quantity- or range-valued use context assigned to the charge item definition',
	},
	'context-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.useContext.code',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type',
		description: 'A type of use context assigned to the charge item definition',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ChargeItemDefinition.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-date',
		description: 'The charge item definition publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ChargeItemDefinition.description',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-description',
		description: 'The description of the charge item definition',
	},
	effective: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ChargeItemDefinition.effectivePeriod',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-effective',
		description: 'The time during which the charge item definition is intended to be in use',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-identifier',
		description: 'External identifier for the charge item definition',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-jurisdiction',
		description: 'Intended jurisdiction for the charge item definition',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ChargeItemDefinition.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-publisher',
		description: 'Name of the publisher of the charge item definition',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-status',
		description: 'The current status of the charge item definition',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ChargeItemDefinition.title',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-title',
		description: 'The human-friendly name of the charge item definition',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ChargeItemDefinition.url',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-url',
		description: 'The uri that identifies the charge item definition',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-version',
		description: 'The business version of the charge item definition',
	},
	'context-type-quantity': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type-quantity',
		description: 'A use context type and quantity- or range-based value assigned to the charge item definition',
	},
	'context-type-value': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type-value',
		description: 'A use context type and value assigned to the charge item definition',
	},
};

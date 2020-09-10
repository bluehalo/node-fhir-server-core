/**
 * @name exports
 * @static
 * @summary Arguments for the examplescenario query
 */
module.exports = {
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExampleScenario.useContext.valueCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-context',
		description: 'A use context assigned to the example scenario',
	},
	'context-quantity': {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'ExampleScenario.useContext.valueQuantity',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-context-quantity',
		description: 'A quantity- or range-valued use context assigned to the example scenario',
	},
	'context-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExampleScenario.useContext.code',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type',
		description: 'A type of use context assigned to the example scenario',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ExampleScenario.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-date',
		description: 'The example scenario publication date',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExampleScenario.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-identifier',
		description: 'External identifier for the example scenario',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExampleScenario.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-jurisdiction',
		description: 'Intended jurisdiction for the example scenario',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ExampleScenario.name',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-name',
		description: 'Computationally friendly name of the example scenario',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ExampleScenario.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-publisher',
		description: 'Name of the publisher of the example scenario',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExampleScenario.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-status',
		description: 'The current status of the example scenario',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ExampleScenario.url',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-url',
		description: 'The uri that identifies the example scenario',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExampleScenario.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-version',
		description: 'The business version of the example scenario',
	},
	'context-type-quantity': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type-quantity',
		description: 'A use context type and quantity- or range-based value assigned to the example scenario',
	},
	'context-type-value': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type-value',
		description: 'A use context type and value assigned to the example scenario',
	},
};

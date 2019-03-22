/**
 * @name exports
 * @static
 * @summary Arguments for the operationdefinition query
 */
module.exports = {
	base: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OperationDefinition.base',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-base',
		description: 'Marks this as a profile of the base',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.code',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-code',
		description: 'Name used to invoke the operation',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'OperationDefinition.date',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-date',
		description: 'The operation definition publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'OperationDefinition.description',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-description',
		description: 'The description of the operation definition',
	},
	instance: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.instance',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-instance',
		description: 'Invoke on an instance?',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-jurisdiction',
		description: 'Intended jurisdiction for the operation definition',
	},
	kind: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.kind',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-kind',
		description: 'operation | query',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'OperationDefinition.name',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-name',
		description: 'Computationally friendly name of the operation definition',
	},
	'param-profile': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OperationDefinition.parameter.profile',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-param-profile',
		description: 'Profile on the type',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'OperationDefinition.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-publisher',
		description: 'Name of the publisher of the operation definition',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.status',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-status',
		description: 'The current status of the operation definition',
	},
	system: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.system',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-system',
		description: 'Invoke at the system level?',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.type',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-type',
		description: 'Invole at the type level?',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'OperationDefinition.url',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-url',
		description: 'The uri that identifies the operation definition',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OperationDefinition.version',
		definition: 'http://hl7.org/fhir/SearchParameter/OperationDefinition-version',
		description: 'The business version of the operation definition',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the compartmentdefinition query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.code',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code',
		description: 'Patient | Encounter | RelatedPerson | Practitioner | Device',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CompartmentDefinition.date',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-date',
		description: 'The compartment definition publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.description',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-description',
		description: 'The description of the compartment definition',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-jurisdiction',
		description: 'Intended jurisdiction for the compartment definition',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.name',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-name',
		description: 'Computationally friendly name of the compartment definition',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-publisher',
		description: 'Name of the publisher of the compartment definition',
	},
	resource: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.resource.code',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource',
		description: 'Name of resource type',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.status',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-status',
		description: 'The current status of the compartment definition',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.title',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-title',
		description: 'The human-friendly name of the compartment definition',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'CompartmentDefinition.url',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-url',
		description: 'The uri that identifies the compartment definition',
	},
};

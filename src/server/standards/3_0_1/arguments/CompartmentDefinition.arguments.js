module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code',
		description: 'Patient | Encounter | RelatedPerson | Practitioner | Device.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-date',
		description: 'The compartment definition publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-description',
		description: 'The description of the compartment definition.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-jurisdiction',
		description: 'Intended jurisdiction for the compartment definition.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-name',
		description: 'Computationally friendly name of the compartment definition.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-publisher',
		description: 'Name of the publisher of the compartment definition.',
	},
	RESOURCE: {
		name: 'resource',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource',
		description: 'Name of resource type.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-status',
		description: 'The current status of the compartment definition.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-title',
		description: 'The human-friendly name of the compartment definition.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-url',
		description: 'The uri that identifies the compartment definition.',
	},
};

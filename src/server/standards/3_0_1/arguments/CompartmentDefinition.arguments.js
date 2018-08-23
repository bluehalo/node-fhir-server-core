module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code',
		description: 'Patient | Encounter | RelatedPerson | Practitioner | Device.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-date',
		description: 'The compartment definition publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-description',
		description: 'The description of the compartment definition.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-jurisdiction',
		description: 'Intended jurisdiction for the compartment definition.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-name',
		description: 'Computationally friendly name of the compartment definition.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-publisher',
		description: 'Name of the publisher of the compartment definition.',
	},
	RESOURCE: {
		name: 'Resource',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource',
		description: 'Name of resource type.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-status',
		description: 'The current status of the compartment definition.',
	},
	TITLE: {
		name: 'Title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-title',
		description: 'The human-friendly name of the compartment definition.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/CompartmentDefinition-url',
		description: 'The uri that identifies the compartment definition.',
	},
};

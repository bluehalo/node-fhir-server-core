module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-date',
		description: 'The graph definition publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-description',
		description: 'The description of the graph definition.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-jurisdiction',
		description: 'Intended jurisdiction for the graph definition.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-name',
		description: 'Computationally friendly name of the graph definition.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-publisher',
		description: 'Name of the publisher of the graph definition.',
	},
	START: {
		name: 'Start',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-start',
		description: 'Type of resource at which the graph starts.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-status',
		description: 'The current status of the graph definition.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-url',
		description: 'The uri that identifies the graph definition.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-version',
		description: 'The business version of the graph definition.',
	},
};

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-date',
		documentation: 'The graph definition publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-description',
		documentation: 'The description of the graph definition.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-jurisdiction',
		documentation: 'Intended jurisdiction for the graph definition.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-name',
		documentation: 'Computationally friendly name of the graph definition.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-publisher',
		documentation: 'Name of the publisher of the graph definition.',
	},
	START: {
		name: 'start',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-start',
		documentation: 'Type of resource at which the graph starts.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-status',
		documentation: 'The current status of the graph definition.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-url',
		documentation: 'The uri that identifies the graph definition.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-version',
		documentation: 'The business version of the graph definition.',
	},
};

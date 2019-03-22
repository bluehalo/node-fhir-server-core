/**
 * @name exports
 * @static
 * @summary Arguments for the graphdefinition query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'GraphDefinition.date',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-date',
		description: 'The graph definition publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'GraphDefinition.description',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-description',
		description: 'The description of the graph definition',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'GraphDefinition.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-jurisdiction',
		description: 'Intended jurisdiction for the graph definition',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'GraphDefinition.name',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-name',
		description: 'Computationally friendly name of the graph definition',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'GraphDefinition.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-publisher',
		description: 'Name of the publisher of the graph definition',
	},
	start: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'GraphDefinition.start',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-start',
		description: 'Type of resource at which the graph starts',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'GraphDefinition.status',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-status',
		description: 'The current status of the graph definition',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'GraphDefinition.url',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-url',
		description: 'The uri that identifies the graph definition',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'GraphDefinition.version',
		definition: 'http://hl7.org/fhir/SearchParameter/GraphDefinition-version',
		description: 'The business version of the graph definition',
	},
};

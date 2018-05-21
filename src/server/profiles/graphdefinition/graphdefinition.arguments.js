/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'The graph definition publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'The description of the graph definition',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'Intended jurisdiction for the graph definition',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'Computationally friendly name of the graph definition',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'Name of the publisher of the graph definition',
	},
	START: {
		name: 'start',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'Type of resource at which the graph starts',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'The current status of the graph definition',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'The uri that identifies the graph definition',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#graphdefinition',
		documentation: 'The business version of the graph definition',
	},
};

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'The structure map publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'The description of the structure map',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'External identifier for the structure map',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'Intended jurisdiction for the structure map',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'Computationally friendly name of the structure map',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'Name of the publisher of the structure map',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'The current status of the structure map',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'The human-friendly name of the structure map',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'The uri that identifies the structure map',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#structuremap',
		documentation: 'The business version of the structure map',
	},
};

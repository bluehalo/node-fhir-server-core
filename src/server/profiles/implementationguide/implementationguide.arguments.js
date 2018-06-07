/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'The implementation guide publication date',
	},
	DEPENDENCY: {
		name: 'dependency',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'Where to find dependency',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'The description of the implementation guide',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'For testing purposes, not real usage',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'Intended jurisdiction for the implementation guide',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'Computationally friendly name of the implementation guide',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'Name of the publisher of the implementation guide',
	},
	RESOURCE: {
		name: 'resource',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'Location of the resource',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'The current status of the implementation guide',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'The uri that identifies the implementation guide',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#implementationguide',
		documentation: 'The business version of the implementation guide',
	},
};

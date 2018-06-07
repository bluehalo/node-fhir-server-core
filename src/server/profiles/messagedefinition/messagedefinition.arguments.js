/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The behavior associated with the message',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The message definition publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The description of the message definition',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The event that triggers the message',
	},
	FOCUS: {
		name: 'focus',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'A resource that is a permitted focus of the message',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'External identifier for the message definition',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'Intended jurisdiction for the message definition',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'Computationally friendly name of the message definition',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'Name of the publisher of the message definition',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The current status of the message definition',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The human-friendly name of the message definition',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The uri that identifies the message definition',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messagedefinition',
		documentation: 'The business version of the message definition',
	},
};

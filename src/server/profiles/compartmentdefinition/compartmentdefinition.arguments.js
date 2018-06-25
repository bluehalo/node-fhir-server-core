/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'Patient | Encounter | RelatedPerson | Practitioner | Device',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'The compartment definition publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'The description of the compartment definition',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'Intended jurisdiction for the compartment definition',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'Computationally friendly name of the compartment definition',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'Name of the publisher of the compartment definition',
	},
	RESOURCE: {
		name: 'resource',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'Name of resource type',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'The current status of the compartment definition',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'The human-friendly name of the compartment definition',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#compartmentdefinition',
		documentation: 'The uri that identifies the compartment definition',
	},
};

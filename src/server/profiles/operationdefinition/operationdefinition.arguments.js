/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	BASE: {
		name: 'base',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Marks this as a profile of the base',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Name used to invoke the operation',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'The operation definition publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'The description of the operation definition',
	},
	INSTANCE: {
		name: 'instance',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Invoke on an instance?',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Intended jurisdiction for the operation definition',
	},
	KIND: {
		name: 'kind',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'operation | query',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Computationally friendly name of the operation definition',
	},
	PARAM_PROFILE: {
		name: 'param-profile',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Profile on the type',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Name of the publisher of the operation definition',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'The current status of the operation definition',
	},
	SYSTEM: {
		name: 'system',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Invoke at the system level?',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'Invole at the type level?',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'The uri that identifies the operation definition',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#operationdefinition',
		documentation: 'The business version of the operation definition',
	},
};

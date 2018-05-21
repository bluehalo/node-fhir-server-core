/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CONTACT: {
		name: 'contact',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Name of an individual to contact',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'The naming system publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'The description of the naming system',
	},
	ID_TYPE: {
		name: 'id-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'oid | uuid | uri | other',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Intended jurisdiction for the naming system',
	},
	KIND: {
		name: 'kind',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'codesystem | identifier | root',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Computationally friendly name of the naming system',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'When is identifier valid?',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Name of the publisher of the naming system',
	},
	REPLACED_BY: {
		name: 'replaced-by',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Use this instead',
	},
	RESPONSIBLE: {
		name: 'responsible',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Who maintains system namespace?',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'The current status of the naming system',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'Contact details for individual or organization',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'e.g. driver, provider, patient, bank etc.',
	},
	VALUE: {
		name: 'value',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#namingsystem',
		documentation: 'The unique identifier',
	},
};

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-identifier',
		documentation: 'Instance id from manufacturer, owner, and others.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-location',
		documentation: 'A location, where the resource is found.',
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-manufacturer',
		documentation: 'The manufacturer of the device.',
	},
	MODEL: {
		name: 'model',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-model',
		documentation: 'The model of the device.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-organization',
		documentation: 'The organization responsible for the device.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-patient',
		documentation: 'Patient information, if the resource is affixed to a person.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-type',
		documentation: 'The type of the device.',
	},
	UDI: {
		name: 'udi',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi',
		documentation: 'FDA mandated Unique Device Identifier.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-url',
		documentation: 'Network address to contact device.',
	},
};

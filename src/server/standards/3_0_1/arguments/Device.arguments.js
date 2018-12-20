module.exports = {
	DEVICE_NAME: {
		name: 'device-name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-device-name',
		documentation:
			'A server defined search that may match any of the string fields in the Device.udi.name  or Device.type.coding.display or  Device.type.text.',
	},
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
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-status',
		documentation: 'active | inactive | entered-in-error | unknown.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-type',
		documentation: 'The type of the device.',
	},
	UDI_CARRIER: {
		name: 'udi-carrier',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi-carrier',
		documentation:
			'UDI Barcode (RFID or other technology) string either in HRF format or AIDC format converted to base64 string.',
	},
	UDI_DI: {
		name: 'udi-di',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi-di',
		documentation: 'The udi Device Identifier (DI).',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-url',
		documentation: 'Network address to contact device.',
	},
};

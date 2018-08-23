module.exports = {
	DEVICE_NAME: {
		name: 'Device_name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-device-name',
		description: 'A server defined search that may match any of the string fields in the Device.udi.name  or Device.type.coding.display or  Device.type.text.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-identifier',
		description: 'Instance id from manufacturer, owner, and others.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-location',
		description: 'A location, where the resource is found.',
	},
	MANUFACTURER: {
		name: 'Manufacturer',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-manufacturer',
		description: 'The manufacturer of the device.',
	},
	MODEL: {
		name: 'Model',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-model',
		description: 'The model of the device.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-organization',
		description: 'The organization responsible for the device.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-patient',
		description: 'Patient information, if the resource is affixed to a person.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-status',
		description: 'active | inactive | entered-in-error | unknown.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-type',
		description: 'The type of the device.',
	},
	UDI_CARRIER: {
		name: 'Udi_carrier',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi-carrier',
		description: 'UDI Barcode (RFID or other technology) string either in HRF format or AIDC format converted to base64 string.',
	},
	UDI_DI: {
		name: 'Udi_di',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi-di',
		description: 'The udi Device Identifier (DI).',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-url',
		description: 'Network address to contact device.',
	},
};

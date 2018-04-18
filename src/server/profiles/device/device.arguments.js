/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	DEVICE_NAME: {
		name: 'device-name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'A server defined search that may match any of the string fields in the Device.udi.name or Device.type.coding.display or Device.type.text'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'Instance id from manufacturer, owner, and others'
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'A location, where the resource is found'
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'The manufacturer of the device'
	},
	MODEL: {
		name: 'model',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'The model of the device'
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'The organization responsible for the device'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'Patient information, if the resource is affixed to a person'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'active | inactive | entered-in-error | unknown'
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'The type of the device'
	},
	UDI_CARRIER: {
		name: 'udi-carrier',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'UDI Barcode (RFID or other technology) string either in HRF format or AIDC format converted to base64 string.'
	},
	UDI_DI: {
		name: 'udi-di',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'The udi Device Identifier (DI)'
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#device',
		documentation: 'Network address to contact device'
	}
};

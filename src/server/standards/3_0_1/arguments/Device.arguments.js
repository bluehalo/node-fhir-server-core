/**
 * @name exports
 * @static
 * @summary Arguments for the device query
 */
module.exports = {
	'device-name': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Device.udi.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-device-name',
		description:
			'A server defined search that may match any of the string fields in the Device.udi.name  or Device.type.coding.display or  Device.type.text',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Device.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-identifier',
		description: 'Instance id from manufacturer, owner, and others',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Device.location',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-location',
		description: 'A location, where the resource is found',
	},
	manufacturer: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Device.manufacturer',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-manufacturer',
		description: 'The manufacturer of the device',
	},
	model: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Device.model',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-model',
		description: 'The model of the device',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Device.owner',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-organization',
		description: 'The organization responsible for the device',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Device.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-patient',
		description: 'Patient information, if the resource is affixed to a person',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Device.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-status',
		description: 'active | inactive | entered-in-error | unknown',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Device.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-type',
		description: 'The type of the device',
	},
	'udi-carrier': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Device.udi.carrierHRF',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi-carrier',
		description:
			'UDI Barcode (RFID or other technology) string either in HRF format or AIDC format converted to base64 string.',
	},
	'udi-di': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Device.udi.deviceIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi-di',
		description: 'The udi Device Identifier (DI)',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Device.url',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-url',
		description: 'Network address to contact device',
	},
};

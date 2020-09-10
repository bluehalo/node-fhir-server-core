/**
 * @name exports
 * @static
 * @summary Arguments for the device query
 */
module.exports = {
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
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Device.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-type',
		description: 'The type of the device',
	},
	udi: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Device.udi',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-udi',
		description: 'FDA mandated Unique Device Identifier',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Device.url',
		definition: 'http://hl7.org/fhir/SearchParameter/Device-url',
		description: 'Network address to contact device',
	},
};

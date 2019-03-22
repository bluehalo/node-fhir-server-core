/**
 * @name exports
 * @static
 * @summary Arguments for the deviceuserequest query
 */
module.exports = {
	device: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceUseRequest.device',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-device',
		description: 'Device requested',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceUseRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-patient',
		description: 'Search by subject - a patient',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceUseRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-subject',
		description: 'Search by subject',
	},
};

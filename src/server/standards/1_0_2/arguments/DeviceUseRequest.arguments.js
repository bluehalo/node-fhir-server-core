module.exports = {
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-device',
		documentation: 'Device requested.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-patient',
		documentation: 'Search by subject - a patient.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-subject',
		documentation: 'Search by subject.',
	},
};

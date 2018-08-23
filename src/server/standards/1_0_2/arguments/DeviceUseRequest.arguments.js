module.exports = {
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-device',
		description: 'Device requested.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-patient',
		description: 'Search by subject - a patient.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-subject',
		description: 'Search by subject.',
	},
};

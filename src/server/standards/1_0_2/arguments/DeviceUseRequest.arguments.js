module.exports = {
	DEVICE: {
		name: 'Device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-device',
		description: 'Device requested.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-patient',
		description: 'Search by subject - a patient.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseRequest-subject',
		description: 'Search by subject.',
	},
};

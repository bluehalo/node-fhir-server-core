module.exports = {
	DEVICE: {
		name: 'Device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device',
		description: 'Search by device.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-patient',
		description: 'Search by subject - a patient.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject',
		description: 'Search by subject.',
	},
};

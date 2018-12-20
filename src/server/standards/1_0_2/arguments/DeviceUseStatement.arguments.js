module.exports = {
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device',
		documentation: 'Search by device.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-patient',
		documentation: 'Search by subject - a patient.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject',
		documentation: 'Search by subject.',
	},
};

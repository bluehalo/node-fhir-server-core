module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-identifier',
		description: 'External identifier of the measure report to be returned.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-patient',
		description: 'The identity of a patient to search for individual measure report results for.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-status',
		description: 'The status of the measure report.',
	},
};

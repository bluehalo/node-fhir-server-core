module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-identifier',
		documentation: 'External identifier of the measure report to be returned.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-patient',
		documentation: 'The identity of a patient to search for individual measure report results for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-status',
		documentation: 'The status of the measure report.',
	},
};

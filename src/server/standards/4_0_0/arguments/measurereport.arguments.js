/**
 * @name exports
 * @static
 * @summary Arguments for the measurereport query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MeasureReport.date',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-date',
		description: 'The date of the measure report',
	},
	'evaluated-resource': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MeasureReport.evaluatedResource',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-evaluated-resource',
		description: 'An evaluated resource referenced by the measure report',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MeasureReport.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-identifier',
		description: 'External identifier of the measure report to be returned',
	},
	measure: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MeasureReport.measure',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-measure',
		description: 'The measure to return measure report results for',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MeasureReport.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-patient',
		description: 'The identity of a patient to search for individual measure report results for',
	},
	period: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MeasureReport.period',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-period',
		description: 'The period of the measure report',
	},
	reporter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MeasureReport.reporter',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-reporter',
		description: 'The reporter to return measure report results for',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MeasureReport.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-status',
		description: 'The status of the measure report',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MeasureReport.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-subject',
		description: 'The identity of a subject to search for individual measure report results for',
	},
};

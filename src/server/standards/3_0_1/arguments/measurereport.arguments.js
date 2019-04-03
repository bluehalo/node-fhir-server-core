/**
 * @name exports
 * @static
 * @summary Arguments for the measurereport query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MeasureReport.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-identifier',
		description: 'External identifier of the measure report to be returned',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MeasureReport.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-patient',
		description: 'The identity of a patient to search for individual measure report results for',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MeasureReport.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MeasureReport-status',
		description: 'The status of the measure report',
	},
};

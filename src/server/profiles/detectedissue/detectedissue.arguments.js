/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#detectedissue',
		documentation: 'The provider or device that identified the issue',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#detectedissue',
		documentation: 'Issue Category, e.g. drug-drug, duplicate therapy, etc.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#detectedissue',
		documentation: 'When identified',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#detectedissue',
		documentation: 'Unique id for the detected issue',
	},
	IMPLICATED: {
		name: 'implicated',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#detectedissue',
		documentation: 'Problem resource',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#detectedissue',
		documentation: 'Associated patient',
	},
};

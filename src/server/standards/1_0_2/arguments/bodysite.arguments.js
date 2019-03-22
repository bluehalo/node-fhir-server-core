/**
 * @name exports
 * @static
 * @summary Arguments for the bodysite query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'BodySite.code',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-code',
		description: 'Named anatomical location',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'BodySite.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-identifier',
		description: 'Identifier for this instance of the anatomical location',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'BodySite.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-patient',
		description: 'Patient to whom bodysite belongs',
	},
};

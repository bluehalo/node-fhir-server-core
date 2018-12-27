module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-code',
		documentation: 'Named anatomical location.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-identifier',
		documentation: 'Identifier for this instance of the anatomical location.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-patient',
		documentation: 'Patient to whom bodysite belongs.',
	},
};

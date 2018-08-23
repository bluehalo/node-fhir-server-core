module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-code',
		description: 'Named anatomical location.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-identifier',
		description: 'Identifier for this instance of the anatomical location.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/BodySite-patient',
		description: 'Patient to whom bodysite belongs.',
	},
};

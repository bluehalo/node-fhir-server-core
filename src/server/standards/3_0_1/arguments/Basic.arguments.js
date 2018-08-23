module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-author',
		description: 'Who created.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-code',
		description: 'Kind of Resource.',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-created',
		description: 'When created.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-identifier',
		description: 'Business identifier.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-patient',
		description: 'Identifies the focus of this resource.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-subject',
		description: 'Identifies the focus of this resource.',
	},
};

module.exports = {
	CREATED: {
		name: 'Created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-created',
		description: 'Date attachment was first created.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-identifier',
		description: 'Identifier(s) for the image.',
	},
	OPERATOR: {
		name: 'Operator',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-operator',
		description: 'The person who generated the image.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-patient',
		description: 'Who/What this Media is a record of.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subject',
		description: 'Who/What this Media is a record of.',
	},
	SUBTYPE: {
		name: 'Subtype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subtype',
		description: 'The type of acquisition equipment/process.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-type',
		description: 'photo | video | audio.',
	},
	VIEW: {
		name: 'View',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-view',
		description: 'Imaging view, e.g. Lateral or Antero-posterior.',
	},
};

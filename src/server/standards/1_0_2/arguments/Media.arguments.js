module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-created',
		documentation: 'Date attachment was first created.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-identifier',
		documentation: 'Identifier(s) for the image.',
	},
	OPERATOR: {
		name: 'operator',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-operator',
		documentation: 'The person who generated the image.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-patient',
		documentation: 'Who/What this Media is a record of.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subject',
		documentation: 'Who/What this Media is a record of.',
	},
	SUBTYPE: {
		name: 'subtype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subtype',
		documentation: 'The type of acquisition equipment/process.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-type',
		documentation: 'photo | video | audio.',
	},
	VIEW: {
		name: 'view',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-view',
		documentation: 'Imaging view, e.g. Lateral or Antero-posterior.',
	},
};

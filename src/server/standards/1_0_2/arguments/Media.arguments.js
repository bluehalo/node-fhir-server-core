/**
 * @name exports
 * @static
 * @summary Arguments for the media query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Media.content.creation',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-created',
		description: 'Date attachment was first created',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-identifier',
		description: 'Identifier(s) for the image',
	},
	operator: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.operator',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-operator',
		description: 'The person who generated the image',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-patient',
		description: 'Who/What this Media is a record of',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subject',
		description: 'Who/What this Media is a record of',
	},
	subtype: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.subtype',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subtype',
		description: 'The type of acquisition equipment/process',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-type',
		description: 'photo | video | audio',
	},
	view: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.view',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-view',
		description: 'Imaging view, e.g. Lateral or Antero-posterior',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the media query
 */
module.exports = {
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-based-on',
		description: 'Procedure that caused this media to be created',
	},
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Media.createdDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-created',
		description: 'When Media was collected',
	},
	device: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.device',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-device',
		description: 'Observing Device',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-encounter',
		description: 'Encounter associated with media',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-identifier',
		description: 'Identifier(s) for the image',
	},
	modality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.modality',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-modality',
		description: 'The type of acquisition equipment/process',
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
	site: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-site',
		description: 'Observed body part',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-status',
		description: 'preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Media.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subject',
		description: 'Who/What this Media is a record of',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-type',
		description: 'Classification of media as image, video, or audio',
	},
	view: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Media.view',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-view',
		description: 'Imaging view, e.g. Lateral or Antero-posterior',
	},
};

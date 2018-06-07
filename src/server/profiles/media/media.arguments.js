/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Procedure that caused this media to be created',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Encounter / Episode associated with media',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Date attachment was first created',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'When Media was collected',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Observing Device',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Identifier(s) for the image',
	},
	OPERATOR: {
		name: 'operator',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'The person who generated the image',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Who/What this Media is a record of',
	},
	SITE: {
		name: 'site',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Body part in media',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Who/What this Media is a record of',
	},
	SUBTYPE: {
		name: 'subtype',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'The type of acquisition equipment/process',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'photo | video | audio',
	},
	VIEW: {
		name: 'view',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#media',
		documentation: 'Imaging view, e.g. Lateral or Antero-posterior',
	},
};

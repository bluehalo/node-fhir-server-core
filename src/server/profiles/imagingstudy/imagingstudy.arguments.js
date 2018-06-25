/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACCESSION: {
		name: 'accession',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The accession identifier for the study',
	},
	BASEDON: {
		name: 'basedon',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The order for the image',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The body site studied',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The context of the study',
	},
	DICOM_CLASS: {
		name: 'dicom-class',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The type of the instance',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The endpoint for te study or series',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'Other identifiers for the Study',
	},
	MODALITY: {
		name: 'modality',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The modality of the series',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'Who the study is about',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The person who performed the study',
	},
	REASON: {
		name: 'reason',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The reason for the study',
	},
	SERIES: {
		name: 'series',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The identifier of the series of images',
	},
	STARTED: {
		name: 'started',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'When the study was started',
	},
	STUDY: {
		name: 'study',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The study identifier for the image',
	},
	UID: {
		name: 'uid',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingstudy',
		documentation: 'The instance unique identifier',
	},
};

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'Author of the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	AUTHORING_TIME: {
		name: 'authoring-time',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'Time of the ImagingManifest (or a DICOM Key Object Selection which it represents) authoring',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'The endpoint for the study or series',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'UID of the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	IMAGING_STUDY: {
		name: 'imaging-study',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'ImagingStudy resource selected in the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	SELECTED_STUDY: {
		name: 'selected-study',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#imagingmanifest',
		documentation: 'Study selected in the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
};

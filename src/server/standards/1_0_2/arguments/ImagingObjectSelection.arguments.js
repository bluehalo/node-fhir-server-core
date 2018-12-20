module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-author',
		documentation: 'Author of key DICOM object selection.',
	},
	AUTHORING_TIME: {
		name: 'authoring-time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-authoring-time',
		documentation: 'Time of key DICOM object selection authoring.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-identifier',
		documentation: 'UID of key DICOM object selection.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-patient',
		documentation: 'Subject of key DICOM object selection.',
	},
	SELECTED_STUDY: {
		name: 'selected-study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-selected-study',
		documentation: 'Study selected in key DICOM object selection.',
	},
	TITLE: {
		name: 'title',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-title',
		documentation: 'Title of key DICOM object selection.',
	},
};

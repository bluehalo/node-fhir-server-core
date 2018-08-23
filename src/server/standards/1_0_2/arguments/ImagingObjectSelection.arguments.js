module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-author',
		description: 'Author of key DICOM object selection.',
	},
	AUTHORING_TIME: {
		name: 'authoring-time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-authoring-time',
		description: 'Time of key DICOM object selection authoring.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-identifier',
		description: 'UID of key DICOM object selection.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-patient',
		description: 'Subject of key DICOM object selection.',
	},
	SELECTED_STUDY: {
		name: 'selected-study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-selected-study',
		description: 'Study selected in key DICOM object selection.',
	},
	TITLE: {
		name: 'title',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-title',
		description: 'Title of key DICOM object selection.',
	},
};

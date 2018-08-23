module.exports = {
	AUTHOR: {
		name: 'Author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-author',
		description: 'Author of key DICOM object selection.',
	},
	AUTHORING_TIME: {
		name: 'Authoring_time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-authoring-time',
		description: 'Time of key DICOM object selection authoring.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-identifier',
		description: 'UID of key DICOM object selection.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-patient',
		description: 'Subject of key DICOM object selection.',
	},
	SELECTED_STUDY: {
		name: 'Selected_study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-selected-study',
		description: 'Study selected in key DICOM object selection.',
	},
	TITLE: {
		name: 'Title',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-title',
		description: 'Title of key DICOM object selection.',
	},
};

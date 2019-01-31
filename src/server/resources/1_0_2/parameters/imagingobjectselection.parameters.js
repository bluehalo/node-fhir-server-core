/**
 * @name exports
 * @static
 * @summary Arguments for the imagingobjectselection query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingObjectSelection.author',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-author',
		description: 'Author of key DICOM object selection',
	},
	'authoring-time': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImagingObjectSelection.authoringTime',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-authoring-time',
		description: 'Time of key DICOM object selection authoring',
	},
	identifier: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingObjectSelection.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-identifier',
		description: 'UID of key DICOM object selection',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingObjectSelection.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-patient',
		description: 'Subject of key DICOM object selection',
	},
	'selected-study': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingObjectSelection.study.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-selected-study',
		description: 'Study selected in key DICOM object selection',
	},
	title: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingObjectSelection.title',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-title',
		description: 'Title of key DICOM object selection',
	},
};

module.exports = {
	ACCESSION: {
		name: 'accession',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-accession',
		description: 'The accession identifier for the study.',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite',
		description: 'The body site studied.',
	},
	DICOM_CLASS: {
		name: 'dicom-class',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class',
		description: 'The type of the instance.',
	},
	MODALITY: {
		name: 'modality',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-modality',
		description: 'The modality of the series.',
	},
	ORDER: {
		name: 'order',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-order',
		description: 'The order for the image.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-patient',
		description: 'Who the study is about.',
	},
	SERIES: {
		name: 'series',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-series',
		description: 'The identifier of the series of images.',
	},
	STARTED: {
		name: 'started',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-started',
		description: 'When the study was started.',
	},
	STUDY: {
		name: 'study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-study',
		description: 'The study identifier for the image.',
	},
	UID: {
		name: 'uid',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-uid',
		description: 'The instance unique identifier.',
	},
};

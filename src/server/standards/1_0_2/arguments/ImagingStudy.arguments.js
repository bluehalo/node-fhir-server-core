module.exports = {
	ACCESSION: {
		name: 'accession',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-accession',
		documentation: 'The accession identifier for the study.',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite',
		documentation: 'The body site studied.',
	},
	DICOM_CLASS: {
		name: 'dicom-class',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class',
		documentation: 'The type of the instance.',
	},
	MODALITY: {
		name: 'modality',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-modality',
		documentation: 'The modality of the series.',
	},
	ORDER: {
		name: 'order',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-order',
		documentation: 'The order for the image.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-patient',
		documentation: 'Who the study is about.',
	},
	SERIES: {
		name: 'series',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-series',
		documentation: 'The identifier of the series of images.',
	},
	STARTED: {
		name: 'started',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-started',
		documentation: 'When the study was started.',
	},
	STUDY: {
		name: 'study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-study',
		documentation: 'The study identifier for the image.',
	},
	UID: {
		name: 'uid',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-uid',
		documentation: 'The instance unique identifier.',
	},
};

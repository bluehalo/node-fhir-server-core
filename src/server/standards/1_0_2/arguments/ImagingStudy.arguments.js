module.exports = {
	ACCESSION: {
		name: 'Accession',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-accession',
		description: 'The accession identifier for the study.',
	},
	BODYSITE: {
		name: 'Bodysite',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite',
		description: 'The body site studied.',
	},
	DICOM_CLASS: {
		name: 'Dicom_class',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class',
		description: 'The type of the instance.',
	},
	MODALITY: {
		name: 'Modality',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-modality',
		description: 'The modality of the series.',
	},
	ORDER: {
		name: 'Order',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-order',
		description: 'The order for the image.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-patient',
		description: 'Who the study is about.',
	},
	SERIES: {
		name: 'Series',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-series',
		description: 'The identifier of the series of images.',
	},
	STARTED: {
		name: 'Started',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-started',
		description: 'When the study was started.',
	},
	STUDY: {
		name: 'Study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-study',
		description: 'The study identifier for the image.',
	},
	UID: {
		name: 'Uid',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-uid',
		description: 'The instance unique identifier.',
	},
};

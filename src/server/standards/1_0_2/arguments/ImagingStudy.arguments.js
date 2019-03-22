/**
 * @name exports
 * @static
 * @summary Arguments for the imagingstudy query
 */
module.exports = {
	accession: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.accession',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-accession',
		description: 'The accession identifier for the study',
	},
	bodysite: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite',
		description: 'The body site studied',
	},
	'dicom-class': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.instance.sopClass',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class',
		description: 'The type of the instance',
	},
	modality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.modality',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-modality',
		description: 'The modality of the series',
	},
	order: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.order',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-order',
		description: 'The order for the image',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-patient',
		description: 'Who the study is about',
	},
	series: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-series',
		description: 'The identifier of the series of images',
	},
	started: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImagingStudy.started',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-started',
		description: 'When the study was started',
	},
	study: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-study',
		description: 'The study identifier for the image',
	},
	uid: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.instance.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-uid',
		description: 'The instance unique identifier',
	},
};

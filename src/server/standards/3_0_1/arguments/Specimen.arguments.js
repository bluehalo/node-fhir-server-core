module.exports = {
	ACCESSION: {
		name: 'accession',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-accession',
		documentation: 'The accession number associated with the specimen.',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-bodysite',
		documentation: 'The code for the body site from where the specimen originated.',
	},
	COLLECTED: {
		name: 'collected',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-collected',
		documentation: 'The date the specimen was collected.',
	},
	COLLECTOR: {
		name: 'collector',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-collector',
		documentation: 'Who collected the specimen.',
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-container',
		documentation: 'The kind of specimen container.',
	},
	CONTAINER_ID: {
		name: 'container-id',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-container-id',
		documentation: 'The unique identifier associated with the specimen container.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-identifier',
		documentation: 'The unique identifier associated with the specimen.',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-parent',
		documentation: 'The parent of the specimen.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-patient',
		documentation: 'The patient the specimen comes from.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-status',
		documentation: 'available | unavailable | unsatisfactory | entered-in-error.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-subject',
		documentation: 'The subject of the specimen.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-type',
		documentation: 'The specimen type.',
	},
};

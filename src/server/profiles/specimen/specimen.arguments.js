/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACCESSION: {
		name: 'accession',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The accession number associated with the specimen',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The code for the body site from where the specimen originated',
	},
	COLLECTED: {
		name: 'collected',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The date the specimen was collected',
	},
	COLLECTOR: {
		name: 'collector',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'Who collected the specimen',
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The kind of specimen container',
	},
	CONTAINER_ID: {
		name: 'container-id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The unique identifier associated with the specimen container',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The unique identifier associated with the specimen',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The parent of the specimen',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The patient the specimen comes from',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'available | unavailable | unsatisfactory | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The subject of the specimen',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#specimen',
		documentation: 'The specimen type',
	},
};

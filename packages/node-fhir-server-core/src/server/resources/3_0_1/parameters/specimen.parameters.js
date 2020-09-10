/**
 * @name exports
 * @static
 * @summary Arguments for the specimen query
 */
module.exports = {
	accession: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.accessionIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-accession',
		description: 'The accession number associated with the specimen',
	},
	bodysite: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.collection.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-bodysite',
		description: 'The code for the body site from where the specimen originated',
	},
	collected: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Specimen.collection.collectedDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-collected',
		description: 'The date the specimen was collected',
	},
	collector: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Specimen.collection.collector',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-collector',
		description: 'Who collected the specimen',
	},
	container: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.container.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-container',
		description: 'The kind of specimen container',
	},
	'container-id': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.container.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-container-id',
		description: 'The unique identifier associated with the specimen container',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-identifier',
		description: 'The unique identifier associated with the specimen',
	},
	parent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Specimen.parent',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-parent',
		description: 'The parent of the specimen',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Specimen.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-patient',
		description: 'The patient the specimen comes from',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-status',
		description: 'available | unavailable | unsatisfactory | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Specimen.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-subject',
		description: 'The subject of the specimen',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Specimen.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Specimen-type',
		description: 'The specimen type',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the basic query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Basic.author',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-author',
		description: 'Who created',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Basic.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-code',
		description: 'Kind of Resource',
	},
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Basic.created',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-created',
		description: 'When created',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Basic.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-identifier',
		description: 'Business identifier',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Basic.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-patient',
		description: 'Identifies the focus of this resource',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Basic.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Basic-subject',
		description: 'Identifies the focus of this resource',
	},
};

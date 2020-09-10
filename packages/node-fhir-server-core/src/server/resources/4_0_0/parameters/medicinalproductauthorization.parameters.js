/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductauthorization query
 */
module.exports = {
	country: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductAuthorization.country',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-country',
		description: 'The country in which the marketing authorization has been granted',
	},
	holder: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductAuthorization.holder',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-holder',
		description: 'Marketing Authorization Holder',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductAuthorization.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-identifier',
		description: 'Business identifier for the marketing authorization, as assigned by a regulator',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductAuthorization.status',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-status',
		description: 'The status of the marketing authorization',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductAuthorization.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-subject',
		description: 'The medicinal product that is being authorized',
	},
};

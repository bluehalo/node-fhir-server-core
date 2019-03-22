/**
 * @name exports
 * @static
 * @summary Arguments for the relatedperson query
 */
module.exports = {
	address: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address',
		description: 'An address in any kind of address/part',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-city',
		description: 'A city specified in an address',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-country',
		description: 'A country specified in an address',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-postalcode',
		description: 'A postal code specified in an address',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-state',
		description: 'A state specified in an address',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-use',
		description: 'A use code specified in an address',
	},
	birthdate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'RelatedPerson.birthDate',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-birthdate',
		description: "The Related Person's date of birth",
	},
	email: {
		type: 'token',
		fhirtype: 'token',
		xpath: "RelatedPerson.telecom[system/@value='email']",
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-email',
		description: 'A value in an email contact',
	},
	gender: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.gender',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-gender',
		description: 'Gender of the person',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier',
		description: 'A patient Identifier',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.name',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-name',
		description: 'A portion of name in any name part',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RelatedPerson.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-patient',
		description: 'The patient this person is related to',
	},
	phone: {
		type: 'token',
		fhirtype: 'token',
		xpath: "RelatedPerson.telecom[system/@value='phone']",
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-phone',
		description: 'A value in a phone contact',
	},
	phonetic: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.name',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-phonetic',
		description: 'A portion of name using some kind of phonetic matching algorithm',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-telecom',
		description: 'The value in any kind of contact',
	},
};

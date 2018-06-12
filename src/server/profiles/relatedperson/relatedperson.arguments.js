/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'Indicates if the related person record is active',
	},
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A city specified in an address',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A country specified in an address',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A postal code specified in an address',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A state specified in an address',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A use code specified in an address',
	},
	BIRTHDATE: {
		name: 'birthdate',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'The Related Person\'s date of birth',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A value in an email contact',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'Gender of the related person',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'An Identifier of the RelatedPerson',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'The patient this related person is related to',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A value in a phone contact',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'A portion of name using some kind of phonetic matching algorithm',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#relatedperson',
		documentation: 'The value in any kind of contact',
	},
};

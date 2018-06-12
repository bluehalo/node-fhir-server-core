/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A city specified in an address',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A country specified in an address',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A postal code specified in an address',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A state specified in an address',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A use code specified in an address',
	},
	BIRTHDATE: {
		name: 'birthdate',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The person\'s date of birth',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A value in an email contact',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The gender of the person',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A person Identifier',
	},
	LINK: {
		name: 'link',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'Any link has this Patient, Person, RelatedPerson or Practitioner reference',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The organization at which this person record is being managed',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The Person links to this Patient',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A value in a phone contact',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'A portion of name using some kind of phonetic matching algorithm',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The Person links to this Practitioner',
	},
	RELATEDPERSON: {
		name: 'relatedperson',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The Person links to this RelatedPerson',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#person',
		documentation: 'The value in any kind of contact',
	},
};

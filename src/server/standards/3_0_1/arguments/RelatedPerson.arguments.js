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
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  ',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-city',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Patient](patient.html): A city specified in an address  ',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-country',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Patient](patient.html): A country specified in an address  ',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-postalcode',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Patient](patient.html): A postalCode specified in an address  ',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-state',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Patient](patient.html): A state specified in an address  ',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-use',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Patient](patient.html): A use code specified in an address  ',
	},
	birthdate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'RelatedPerson.birthDate',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-birthdate',
		description:
			"Multiple Resources:     * [RelatedPerson](relatedperson.html): The Related Person's date of birth  * [Person](person.html): The person's date of birth  * [Patient](patient.html): The patient's date of birth  ",
	},
	email: {
		type: 'token',
		fhirtype: 'token',
		xpath: "RelatedPerson.telecom[system/@value='email']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  ',
	},
	gender: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.gender',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-gender',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): Gender of the related person  * [Practitioner](practitioner.html): Gender of the practitioner  * [Person](person.html): The gender of the person  * [Patient](patient.html): Gender of the patient  ',
	},
	phone: {
		type: 'token',
		fhirtype: 'token',
		xpath: "RelatedPerson.telecom[system/@value='phone']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  ',
	},
	phonetic: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.name',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phonetic',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  ',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  ',
	},
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.active',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-active',
		description: 'Indicates if the related person record is active',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RelatedPerson.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier',
		description: 'An Identifier of the RelatedPerson',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'RelatedPerson.name',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-name',
		description:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RelatedPerson.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-patient',
		description: 'The patient this related person is related to',
	},
};

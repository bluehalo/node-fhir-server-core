module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-active',
		documentation: 'Whether the patient record is active.',
	},
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  .',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-city',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Patient](patient.html): A city specified in an address  .',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-country',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Patient](patient.html): A country specified in an address  .',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-postalcode',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Patient](patient.html): A postalCode specified in an address  .',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-state',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Patient](patient.html): A state specified in an address  .',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-use',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Patient](patient.html): A use code specified in an address  .',
	},
	ANIMAL_BREED: {
		name: 'animal-breed',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-animal-breed',
		documentation: 'The breed for animal patients.',
	},
	ANIMAL_SPECIES: {
		name: 'animal-species',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-animal-species',
		documentation: 'The species for animal patients.',
	},
	BIRTHDATE: {
		name: 'birthdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-birthdate',
		documentation:
			"Multiple Resources:     * [RelatedPerson](relatedperson.html): The Related Person's date of birth  * [Person](person.html): The person's date of birth  * [Patient](patient.html): The patient's date of birth  .",
	},
	DEATH_DATE: {
		name: 'death-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-death-date',
		documentation: 'The date of death has been provided and satisfies this search value.',
	},
	DECEASED: {
		name: 'deceased',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-deceased',
		documentation: 'This patient has been marked as deceased, or as a death date entered.',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		documentation:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  .',
	},
	FAMILY: {
		name: 'family',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-family',
		documentation:
			'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the family name  * [Patient](patient.html): A portion of the family name of the patient  .',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-gender',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): Gender of the related person  * [Practitioner](practitioner.html): Gender of the practitioner  * [Person](person.html): The gender of the person  * [Patient](patient.html): Gender of the patient  .',
	},
	GENERAL_PRACTITIONER: {
		name: 'general-practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-general-practitioner',
		documentation: "Patient's nominated general practitioner, not the organization that manages the record.",
	},
	GIVEN: {
		name: 'given',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-given',
		documentation:
			'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the given name  * [Patient](patient.html): A portion of the given name of the patient  .',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-identifier',
		documentation: 'A patient identifier.',
	},
	LANGUAGE: {
		name: 'language',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-language',
		documentation: 'Language code (irrespective of use value).',
	},
	LINK: {
		name: 'link',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-link',
		documentation: 'All patients linked to the given patient.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-name',
		documentation:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-organization',
		documentation: 'The organization at which this person is a patient.',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		documentation:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  .',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phonetic',
		documentation:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  .',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		documentation:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  .',
	},
};

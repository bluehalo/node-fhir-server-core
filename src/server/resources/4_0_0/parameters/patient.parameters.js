/**
 * @name exports
 * @static
 * @summary Arguments for the patient query
 */
module.exports = {
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.active',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-active',
		description: 'Whether the patient record is active',
	},
	address: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.address',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address',
		description:
			'Multiple Resources:     * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  ',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-city',
		description:
			'Multiple Resources:     * [Patient](patient.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [RelatedPerson](relatedperson.html): A city specified in an address  ',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-country',
		description:
			'Multiple Resources:     * [Patient](patient.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [RelatedPerson](relatedperson.html): A country specified in an address  ',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-postalcode',
		description:
			'Multiple Resources:     * [Patient](patient.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [RelatedPerson](relatedperson.html): A postal code specified in an address  ',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-state',
		description:
			'Multiple Resources:     * [Patient](patient.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [RelatedPerson](relatedperson.html): A state specified in an address  ',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-use',
		description:
			'Multiple Resources:     * [Patient](patient.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [RelatedPerson](relatedperson.html): A use code specified in an address  ',
	},
	birthdate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Patient.birthDate',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-birthdate',
		description:
			"Multiple Resources:     * [Patient](patient.html): The patient's date of birth  * [Person](person.html): The person's date of birth  * [RelatedPerson](relatedperson.html): The Related Person's date of birth  ",
	},
	'death-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Patient.deceasedDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-death-date',
		description: 'The date of death has been provided and satisfies this search value',
	},
	deceased: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.deceasedBoolean',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-deceased',
		description: 'This patient has been marked as deceased, or as a death date entered',
	},
	email: {
		type: 'token',
		fhirtype: 'token',
		xpath: "Patient.telecom[system/@value='email']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		description:
			'Multiple Resources:     * [Patient](patient.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  ',
	},
	family: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.name.family',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-family',
		description:
			'Multiple Resources:     * [Patient](patient.html): A portion of the family name of the patient  * [Practitioner](practitioner.html): A portion of the family name  ',
	},
	gender: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.gender',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-gender',
		description:
			'Multiple Resources:     * [Patient](patient.html): Gender of the patient  * [Person](person.html): The gender of the person  * [Practitioner](practitioner.html): Gender of the practitioner  * [RelatedPerson](relatedperson.html): Gender of the related person  ',
	},
	'general-practitioner': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Patient.generalPractitioner',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-general-practitioner',
		description: "Patient's nominated general practitioner, not the organization that manages the record",
	},
	given: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.name.given',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-given',
		description:
			'Multiple Resources:     * [Patient](patient.html): A portion of the given name of the patient  * [Practitioner](practitioner.html): A portion of the given name  ',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-identifier',
		description: 'A patient identifier',
	},
	language: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.communication.language',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-language',
		description: 'Language code (irrespective of use value)',
	},
	link: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Patient.link.other',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-link',
		description: 'All patients linked to the given patient',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-name',
		description:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Patient.managingOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-organization',
		description: 'The organization that is the custodian of the patient record',
	},
	phone: {
		type: 'token',
		fhirtype: 'token',
		xpath: "Patient.telecom[system/@value='phone']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		description:
			'Multiple Resources:     * [Patient](patient.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  ',
	},
	phonetic: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Patient.name',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phonetic',
		description:
			'Multiple Resources:     * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  ',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Patient.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		description:
			'Multiple Resources:     * [Patient](patient.html): The value in any kind of telecom details of the patient  * [Person](person.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  ',
	},
};

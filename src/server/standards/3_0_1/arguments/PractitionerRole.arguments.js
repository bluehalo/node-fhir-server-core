/**
 * @name exports
 * @static
 * @summary Arguments for the practitionerrole query
 */
module.exports = {
	email: {
		type: 'token',
		fhirtype: 'token',
		xpath: "PractitionerRole.telecom[system/@value='email']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  ',
	},
	phone: {
		type: 'token',
		fhirtype: 'token',
		xpath: "PractitionerRole.telecom[system/@value='phone']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  ',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PractitionerRole.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  ',
	},
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PractitionerRole.active',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-active',
		description: "Whether this practitioner's record is in active use",
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'PractitionerRole.period',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-date',
		description: 'The period during which the practitioner is authorized to perform in these role(s)',
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PractitionerRole.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-endpoint',
		description: 'Technical endpoints providing access to services operated for the practitioner with this role',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PractitionerRole.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-identifier',
		description: "A practitioner's Identifier",
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PractitionerRole.location',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-location',
		description: 'One of the locations at which this practitioner provides care',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PractitionerRole.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-organization',
		description: 'The identity of the organization the practitioner represents / acts on behalf of',
	},
	practitioner: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PractitionerRole.practitioner',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner',
		description: 'Practitioner that is able to provide the defined services for the organation',
	},
	role: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PractitionerRole.code',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-role',
		description: 'The practitioner can perform this role at for the organization',
	},
	service: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'PractitionerRole.healthcareService',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-service',
		description: "The list of healthcare services that this worker provides for this role's Organization/Location(s)",
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PractitionerRole.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty',
		description: 'The practitioner has this specialty at an organization',
	},
};

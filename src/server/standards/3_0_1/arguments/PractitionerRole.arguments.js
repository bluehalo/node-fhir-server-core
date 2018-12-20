module.exports = {
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		documentation:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  .',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		documentation:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  .',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		documentation:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  .',
	},
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-active',
		documentation: "Whether this practitioner's record is in active use.",
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-date',
		documentation: 'The period during which the practitioner is authorized to perform in these role(s).',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-endpoint',
		documentation: 'Technical endpoints providing access to services operated for the practitioner with this role.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-identifier',
		documentation: "A practitioner's Identifier.",
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-location',
		documentation: 'One of the locations at which this practitioner provides care.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-organization',
		documentation: 'The identity of the organization the practitioner represents / acts on behalf of.',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner',
		documentation: 'Practitioner that is able to provide the defined services for the organation.',
	},
	ROLE: {
		name: 'role',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-role',
		documentation: 'The practitioner can perform this role at for the organization.',
	},
	SERVICE: {
		name: 'service',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-service',
		documentation:
			"The list of healthcare services that this worker provides for this role's Organization/Location(s).",
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty',
		documentation: 'The practitioner has this specialty at an organization.',
	},
};

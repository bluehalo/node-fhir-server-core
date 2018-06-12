/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'Whether this practitioner\'s record is in active use',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'The period during which the practitioner is authorized to perform in these role(s)',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'A value in an email contact',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'Technical endpoints providing access to services operated for the practitioner with this role',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'A practitioner\'s Identifier',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'One of the locations at which this practitioner provides care',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'The identity of the organization the practitioner represents / acts on behalf of',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'A value in a phone contact',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'Practitioner that is able to provide the defined services for the organation',
	},
	ROLE: {
		name: 'role',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'The practitioner can perform this role at for the organization',
	},
	SERVICE: {
		name: 'service',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'The list of healthcare services that this worker provides for this role\'s Organization/Location(s)',
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'The practitioner has this specialty at an organization',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#practitionerrole',
		documentation: 'The value in any kind of contact',
	},
};

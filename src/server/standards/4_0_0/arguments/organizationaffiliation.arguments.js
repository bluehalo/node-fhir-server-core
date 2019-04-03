/**
 * @name exports
 * @static
 * @summary Arguments for the organizationaffiliation query
 */
module.exports = {
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.active',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-active',
		description: 'Whether this organization affiliation record is in active use',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'OrganizationAffiliation.period',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-date',
		description: 'The period during which the participatingOrganization is affiliated with the primary organization',
	},
	email: {
		type: 'token',
		fhirtype: 'token',
		xpath: "OrganizationAffiliation.telecom[system/@value='email']",
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-email',
		description: 'A value in an email contact',
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-endpoint',
		description: 'Technical endpoints providing access to services operated for this role',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-identifier',
		description: "An organization affiliation's Identifier",
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.location',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-location',
		description: 'The location(s) at which the role occurs',
	},
	network: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.network',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-network',
		description:
			"Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined)",
	},
	'participating-organization': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.participatingOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-participating-organization',
		description: 'The organization that provides services to the primary organization',
	},
	phone: {
		type: 'token',
		fhirtype: 'token',
		xpath: "OrganizationAffiliation.telecom[system/@value='phone']",
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-phone',
		description: 'A value in a phone contact',
	},
	'primary-organization': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-primary-organization',
		description: 'The organization that receives the services from the participating organization',
	},
	role: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.code',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-role',
		description: 'Definition of the role the participatingOrganization plays',
	},
	service: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrganizationAffiliation.healthcareService',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-service',
		description: 'Healthcare services provided through the role',
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-specialty',
		description: 'Specific specialty of the participatingOrganization in the context of the role',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrganizationAffiliation.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/OrganizationAffiliation-telecom',
		description: 'The value in any kind of contact',
	},
};

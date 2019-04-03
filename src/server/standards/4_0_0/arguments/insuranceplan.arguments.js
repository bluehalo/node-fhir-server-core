/**
 * @name exports
 * @static
 * @summary Arguments for the insuranceplan query
 */
module.exports = {
	address: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-address',
		description:
			'A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-address-city',
		description: 'A city specified in an address',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-address-country',
		description: 'A country specified in an address',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-address-postalcode',
		description: 'A postal code specified in an address',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-address-state',
		description: 'A state specified in an address',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'InsurancePlan.contact.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-address-use',
		description: 'A use code specified in an address',
	},
	'administered-by': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'InsurancePlan.administeredBy',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-administered-by',
		description: 'Product administrator',
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'InsurancePlan.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-endpoint',
		description: 'Technical endpoint',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'InsurancePlan.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-identifier',
		description: "Any identifier for the organization (not the accreditation issuer's identifier)",
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.name',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-name',
		description: "A portion of the organization's name or alias",
	},
	'owned-by': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'InsurancePlan.ownedBy',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-owned-by',
		description: 'An organization of which this organization forms a part',
	},
	phonetic: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'InsurancePlan.name',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-phonetic',
		description: "A portion of the organization's name using some kind of phonetic matching algorithm",
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'InsurancePlan.status',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-status',
		description: 'Is the Organization record active',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'InsurancePlan.type',
		definition: 'http://hl7.org/fhir/SearchParameter/InsurancePlan-type',
		description: 'A code for the type of organization',
	},
};

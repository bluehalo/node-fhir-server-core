/**
 * @name exports
 * @static
 * @summary Arguments for the organization query
 */
module.exports = {
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Organization.active',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-active',
		description: "Whether the organization's record is active",
	},
	address: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.address',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address',
		description: 'A (part of the) address of the Organization',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-city',
		description: 'A city specified in an address',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-country',
		description: 'A country specified in an address',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-postalcode',
		description: 'A postal code specified in an address',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-state',
		description: 'A state specified in an address',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Organization.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-use',
		description: 'A use code specified in an address',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Organization.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-identifier',
		description: "Any identifier for the organization (not the accreditation issuer's identifier)",
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-name',
		description: "A portion of the organization's name",
	},
	partof: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Organization.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-partof',
		description: 'Search all organizations that are part of the given organization',
	},
	phonetic: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Organization.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-phonetic',
		description: "A portion of the organization's name using some kind of phonetic matching algorithm",
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Organization.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-type',
		description: 'A code for the type of organization',
	},
};

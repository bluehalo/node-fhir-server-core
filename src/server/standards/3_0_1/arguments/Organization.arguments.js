module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-active',
		documentation:
			'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text.',
	},
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address',
		documentation: 'A (part of the) address of the organization.',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-city',
		documentation: 'A city specified in an address.',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-country',
		documentation: 'A country specified in an address.',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-postalcode',
		documentation: 'A postal code specified in an address.',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-state',
		documentation: 'A state specified in an address.',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-use',
		documentation: 'A use code specified in an address.',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-endpoint',
		documentation: 'Technical endpoints providing access to services operated for the organization.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-identifier',
		documentation: "Any identifier for the organization (not the accreditation issuer's identifier).",
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-name',
		documentation: "A portion of the organization's name or alias.",
	},
	PARTOF: {
		name: 'partof',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-partof',
		documentation: 'An organization of which this organization forms a part.',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-phonetic',
		documentation: "A portion of the organization's name using some kind of phonetic matching algorithm.",
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-type',
		documentation: 'A code for the type of organization.',
	},
};

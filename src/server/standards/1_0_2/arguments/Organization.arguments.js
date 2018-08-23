module.exports = {
	ACTIVE: {
		name: 'Active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-active',
		description: 'Whether the organization\'s record is active.',
	},
	ADDRESS: {
		name: 'Address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address',
		description: 'A (part of the) address of the Organization.',
	},
	ADDRESS_CITY: {
		name: 'Address_city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-city',
		description: 'A city specified in an address.',
	},
	ADDRESS_COUNTRY: {
		name: 'Address_country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-country',
		description: 'A country specified in an address.',
	},
	ADDRESS_POSTALCODE: {
		name: 'Address_postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-postalcode',
		description: 'A postal code specified in an address.',
	},
	ADDRESS_STATE: {
		name: 'Address_state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-state',
		description: 'A state specified in an address.',
	},
	ADDRESS_USE: {
		name: 'Address_use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-address-use',
		description: 'A use code specified in an address.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-identifier',
		description: 'Any identifier for the organization (not the accreditation issuer\'s identifier).',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-name',
		description: 'A portion of the organization\'s name.',
	},
	PARTOF: {
		name: 'Partof',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-partof',
		description: 'Search all organizations that are part of the given organization.',
	},
	PHONETIC: {
		name: 'Phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-phonetic',
		description: 'A portion of the organization\'s name using some kind of phonetic matching algorithm.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Organization-type',
		description: 'A code for the type of organization.',
	},
};

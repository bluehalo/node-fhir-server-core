/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: undefined
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: 'Technical endpoints providing access to services operated for the organization'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: 'Any identifier for the organization (not the accreditation issuer\'s identifier)'
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: 'A portion of the organization\'s name or alias'
	},
	PARTOF: {
		name: 'partof',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: 'An organization of which this organization forms a part'
	},
	PHONETIC: {
		name: 'PHONETIC',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: 'A portion of the organization\'s name using some kind of phonetic matching algorithm'
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#organization',
		documentation: 'A code for the type of organization'
	}
};

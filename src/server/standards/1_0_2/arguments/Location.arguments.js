/**
 * @name exports
 * @static
 * @summary Arguments for the location query
 */
module.exports = {
	address: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Location.address',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address',
		description: 'A (part of the) address of the location',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Location.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-city',
		description: 'A city specified in an address',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Location.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-country',
		description: 'A country specified in an address',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Location.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-postalcode',
		description: 'A postal code specified in an address',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Location.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-state',
		description: 'A state specified in an address',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Location.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-use',
		description: 'A use code specified in an address',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Location.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-identifier',
		description: 'Unique code or number identifying the location to its users',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Location.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-name',
		description: 'A (portion of the) name of the location',
	},
	near: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Location.position',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-near',
		description:
			'The coordinates expressed as [lat],[long] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)',
	},
	'near-distance': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Location.position',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-near-distance',
		description: 'A distance quantity to limit the near search to locations within a specific distance',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Location.managingOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-organization',
		description: 'Searches for locations that are managed by the provided organization',
	},
	partof: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Location.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-partof',
		description: 'The location of which this location is a part',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Location.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-status',
		description: 'Searches for locations with a specific kind of status',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Location.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-type',
		description: 'A code for the type of location',
	},
};

module.exports = {
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address',
		documentation: 'A (part of the) address of the location.',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-city',
		documentation: 'A city specified in an address.',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-country',
		documentation: 'A country specified in an address.',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-postalcode',
		documentation: 'A postal code specified in an address.',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-state',
		documentation: 'A state specified in an address.',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-address-use',
		documentation: 'A use code specified in an address.',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-endpoint',
		documentation: 'Technical endpoints providing access to services operated for the location.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-identifier',
		documentation: 'An identifier for the location.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-name',
		documentation: "A portion of the location's name or alias.",
	},
	NEAR: {
		name: 'near',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-near',
		documentation:
			'The coordinates expressed as [latitude]:[longitude] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)  Requires the near-distance parameter to be provided also.',
	},
	NEAR_DISTANCE: {
		name: 'near-distance',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-near-distance',
		documentation:
			'A distance quantity to limit the near search to locations within a specific distance  Requires the near parameter to also be included.',
	},
	OPERATIONAL_STATUS: {
		name: 'operational-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-operational-status',
		documentation:
			'Searches for locations (typically bed/room) that have an operational status (e.g. contaminated, housekeeping).',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-organization',
		documentation: 'Searches for locations that are managed by the provided organization.',
	},
	PARTOF: {
		name: 'partof',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-partof',
		documentation: 'A location of which this location is a part.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-status',
		documentation: 'Searches for locations with a specific kind of status.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Location-type',
		documentation: 'A code for the type of location.',
	},
};

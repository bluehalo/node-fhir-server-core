/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A (part of the) address of the location'
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A city specified in an address'
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A country specified in an address'
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A postal code specified in an address'
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A state specified in an address'
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A use code specified in an address'
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'Technical endpoints providing access to services operated for the location'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'An identifier for the location'
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A portion of the location\'s name or alias'
	},
	NEAR: {
		name: 'near',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'The coordinates expressed as [latitude]:[longitude] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)'
	},
	NEAR_DISTANCE: {
		name: 'near-distance',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A distance quantity to limit the near search to locations within a specific distance'
	},
	OPERATIONAL_STATUS: {
		name: 'operational-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'Searrches for locations (typically bed/room) that have an operational status (e.g. contaminated, housekeeping)'
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'Searches for locations that are managed by the provided organization'
	},
	PARTOF: {
		name: 'partof',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A location of which this location is a part'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'Searches for locations with a specific kind of status'
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#location',
		documentation: 'A code for the type of location'
	}
};

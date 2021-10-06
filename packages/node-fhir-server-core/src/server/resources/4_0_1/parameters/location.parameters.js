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
  endpoint: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Location.endpoint',
    definition: 'http://hl7.org/fhir/SearchParameter/Location-endpoint',
    description: 'Technical endpoints providing access to services operated for the location',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Location.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Location-identifier',
    description: 'An identifier for the location',
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Location.name',
    definition: 'http://hl7.org/fhir/SearchParameter/Location-name',
    description: "A portion of the location's name or alias",
  },
  near: {
    type: 'special',
    fhirtype: 'special',
    xpath: 'Location.position',
    definition: 'http://hl7.org/fhir/SearchParameter/Location-near',
    description:
      'Search for locations where the location.position is near to, or within a specified distance of, the provided coordinates expressed as [latitude]|[longitude]|[distance]|[units] (using the WGS84 datum, see notes). If the units are omitted, then kms should be assumed. If the distance is omitted, then the server can use its own discretion as to what distances should be considered near (and units are irrelevant)  Servers may search using various techniques that might have differing accuracies, depending on implementation efficiency.  Requires the near-distance parameter to be provided also',
  },
  'operational-status': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Location.operationalStatus',
    definition: 'http://hl7.org/fhir/SearchParameter/Location-operational-status',
    description:
      'Searches for locations (typically bed/room) that have an operational status (e.g. contaminated, housekeeping)',
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
    description: 'A location of which this location is a part',
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

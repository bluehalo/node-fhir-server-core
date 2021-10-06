/**
 * @name exports
 * @static
 * @summary Arguments for the schedule query
 */
module.exports = {
  active: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Schedule.active',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-active',
    description: 'Is the schedule in active use',
  },
  actor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Schedule.actor',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-actor',
    description:
      'The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for',
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Schedule.planningHorizon',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-date',
    description:
      'Search for Schedule resources that have a period that contains this date specified',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Schedule.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-identifier',
    description: 'A Schedule Identifier',
  },
  'service-category': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Schedule.serviceCategory',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-service-category',
    description: 'High-level category',
  },
  'service-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Schedule.serviceType',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-service-type',
    description: 'The type of appointments that can be booked into associated slot(s)',
  },
  specialty: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Schedule.specialty',
    definition: 'http://hl7.org/fhir/SearchParameter/Schedule-specialty',
    description: 'Type of specialty needed',
  },
};

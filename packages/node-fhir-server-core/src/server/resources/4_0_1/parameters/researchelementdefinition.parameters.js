/**
 * @name exports
 * @static
 * @summary Arguments for the researchelementdefinition query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchElementDefinition.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-composed-of',
    description: 'What resource is being referenced',
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context',
    description: 'A use context assigned to the research element definition',
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'ResearchElementDefinition.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-quantity',
    description:
      'A quantity- or range-valued use context assigned to the research element definition',
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type',
    description: 'A type of use context assigned to the research element definition',
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ResearchElementDefinition.date',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-date',
    description: 'The research element definition publication date',
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchElementDefinition.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-depends-on',
    description: 'What resource is being referenced',
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchElementDefinition.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-derived-from',
    description: 'What resource is being referenced',
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchElementDefinition.description',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-description',
    description: 'The description of the research element definition',
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ResearchElementDefinition.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-effective',
    description: 'The time during which the research element definition is intended to be in use',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-identifier',
    description: 'External identifier for the research element definition',
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-jurisdiction',
    description: 'Intended jurisdiction for the research element definition',
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchElementDefinition.name',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-name',
    description: 'Computationally friendly name of the research element definition',
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchElementDefinition.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-predecessor',
    description: 'What resource is being referenced',
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchElementDefinition.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-publisher',
    description: 'Name of the publisher of the research element definition',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.status',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-status',
    description: 'The current status of the research element definition',
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchElementDefinition.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-successor',
    description: 'What resource is being referenced',
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchElementDefinition.title',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-title',
    description: 'The human-friendly name of the research element definition',
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-topic',
    description: 'Topics associated with the ResearchElementDefinition',
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'ResearchElementDefinition.url',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-url',
    description: 'The uri that identifies the research element definition',
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchElementDefinition.version',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-version',
    description: 'The business version of the research element definition',
  },
  'context-type-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition:
      'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type-quantity',
    description:
      'A use context type and quantity- or range-based value assigned to the research element definition',
  },
  'context-type-value': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type-value',
    description: 'A use context type and value assigned to the research element definition',
  },
};

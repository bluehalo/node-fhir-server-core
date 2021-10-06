/**
 * @name exports
 * @static
 * @summary Arguments for the documentmanifest query
 */
module.exports = {
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'DocumentManifest.masterIdentifier',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
    description:
      'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
  },
  patient: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'DocumentManifest.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
    description:
      'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
  },
  type: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'DocumentManifest.type',
    definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
    description:
      'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [Composition](composition.html): Kind of composition (LOINC if possible)  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  ',
  },
  author: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'DocumentManifest.author',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-author',
    description: 'Who and/or what authored the DocumentManifest',
  },
  created: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'DocumentManifest.created',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-created',
    description: 'When this document manifest created',
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'DocumentManifest.description',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-description',
    description: 'Human-readable description (title)',
  },
  item: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'DocumentManifest.content',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-item',
    description: 'Items in manifest',
  },
  recipient: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'DocumentManifest.recipient',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient',
    description: 'Intended to get notified about this set of documents',
  },
  'related-id': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'DocumentManifest.related.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id',
    description: 'Identifiers of things that are related',
  },
  'related-ref': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'DocumentManifest.related.ref',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref',
    description: 'Related Resource',
  },
  source: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'DocumentManifest.source',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-source',
    description: 'The source system/application/software',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'DocumentManifest.status',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-status',
    description: 'current | superseded | entered-in-error',
  },
  subject: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'DocumentManifest.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-subject',
    description: 'The subject of the set of documents',
  },
};

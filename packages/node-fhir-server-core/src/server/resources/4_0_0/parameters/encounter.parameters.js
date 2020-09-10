/**
 * @name exports
 * @static
 * @summary Arguments for the encounter query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Encounter.period',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		description:
			"Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded  * [CarePlan](careplan.html): Time period plan covers  * [CareTeam](careteam.html): Time period team covers  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  * [Composition](composition.html): Composition editing time  * [Consent](consent.html): When this Consent was created or indexed  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated  * [Flag](flag.html): Time period when flag is active  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [List](list.html): When the list was prepared  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [Procedure](procedure.html): When the procedure was performed  * [RiskAssessment](riskassessment.html): When was assessment made?  * [SupplyRequest](supplyrequest.html): When the request was made  ",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.type',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [Composition](composition.html): Kind of composition (LOINC if possible)  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  ',
	},
	account: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.account',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-account',
		description: 'The set of accounts that may be used for billing for this Encounter',
	},
	appointment: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.appointment',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-appointment',
		description: 'The appointment that scheduled this encounter',
	},
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-based-on',
		description: 'The ServiceRequest that initiated this encounter',
	},
	class: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.class',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-class',
		description: 'Classification of patient encounter',
	},
	diagnosis: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.diagnosis.condition',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-diagnosis',
		description: 'The diagnosis or procedure relevant to the encounter',
	},
	'episode-of-care': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.episodeOfCare',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-episode-of-care',
		description: 'Episode(s) of care that this encounter should be recorded against',
	},
	length: {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'Encounter.length',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-length',
		description: 'Length of encounter in days',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.location.location',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-location',
		description: 'Location the encounter takes place',
	},
	'location-period': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Encounter.location.period',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-location-period',
		description: 'Time period during which the patient was present at the location',
	},
	'part-of': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-part-of',
		description: 'Another Encounter this encounter is part of',
	},
	participant: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.participant.individual',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-participant',
		description: 'Persons involved in the encounter other than the patient',
	},
	'participant-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.participant.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-participant-type',
		description: 'Role of participant in encounter',
	},
	practitioner: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.participant.individual',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-practitioner',
		description: 'Persons involved in the encounter other than the patient',
	},
	'reason-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.reasonCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-reason-code',
		description: 'Coded reason the encounter takes place',
	},
	'reason-reference': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.reasonReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-reason-reference',
		description: 'Reason the encounter takes place (reference)',
	},
	'service-provider': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.serviceProvider',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-service-provider',
		description: 'The organization (facility) responsible for this encounter',
	},
	'special-arrangement': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.hospitalization.specialArrangement',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-special-arrangement',
		description: 'Wheelchair, translator, stretcher, etc.',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Encounter.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-status',
		description: 'planned | arrived | triaged | in-progress | onleave | finished | cancelled +',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Encounter.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Encounter-subject',
		description: 'The patient or group present at the encounter',
	},
};

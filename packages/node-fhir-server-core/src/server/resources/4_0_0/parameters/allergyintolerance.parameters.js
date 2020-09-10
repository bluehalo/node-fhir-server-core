/**
 * @name exports
 * @static
 * @summary Arguments for the allergyintolerance query
 */
module.exports = {
	asserter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.asserter',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-asserter',
		description: 'Source of the information about the allergy',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.category',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category',
		description: 'food | medication | environment | biologic',
	},
	'clinical-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.clinicalStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status',
		description: 'active | inactive | resolved',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.code',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
	},
	criticality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.criticality',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality',
		description: 'low | high | unable-to-assess',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.recordedDate',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		description:
			"Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded  * [CarePlan](careplan.html): Time period plan covers  * [CareTeam](careteam.html): Time period team covers  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  * [Composition](composition.html): Composition editing time  * [Consent](consent.html): When this Consent was created or indexed  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated  * [Flag](flag.html): Time period when flag is active  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [List](list.html): When the list was prepared  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [Procedure](procedure.html): When the procedure was performed  * [RiskAssessment](riskassessment.html): When was assessment made?  * [SupplyRequest](supplyrequest.html): When the request was made  ",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	'last-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.lastOccurrence',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date',
		description: 'Date(/time) of last known occurrence of a reaction',
	},
	manifestation: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.manifestation',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation',
		description: 'Clinical symptoms/signs associated with the Event',
	},
	onset: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.reaction.onset',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset',
		description: 'Date(/time) when manifestations showed',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	recorder: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.recorder',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder',
		description: 'Who recorded the sensitivity',
	},
	route: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.exposureRoute',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route',
		description: 'How the subject was exposed to the substance',
	},
	severity: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.severity',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity',
		description: 'mild | moderate | severe (of event as a whole)',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.type',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [Composition](composition.html): Kind of composition (LOINC if possible)  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  ',
	},
	'verification-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.verificationStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-verification-status',
		description: 'unconfirmed | confirmed | refuted | entered-in-error',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the clinicalimpression query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ClinicalImpression.date',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		description:
			"Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded  * [CarePlan](careplan.html): Time period plan covers  * [CareTeam](careteam.html): Time period team covers  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  * [Composition](composition.html): Composition editing time  * [Consent](consent.html): When this Consent was created or indexed  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated  * [Flag](flag.html): Time period when flag is active  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [List](list.html): When the list was prepared  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [Procedure](procedure.html): When the procedure was performed  * [RiskAssessment](riskassessment.html): When was assessment made?  * [SupplyRequest](supplyrequest.html): When the request was made  ",
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	assessor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.assessor',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor',
		description: 'The clinician performing the assessment',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-encounter',
		description: 'Encounter created as part of',
	},
	'finding-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.finding.itemCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-code',
		description: 'What was found',
	},
	'finding-ref': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.finding.itemReference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-ref',
		description: 'What was found',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-identifier',
		description: 'Business identifier',
	},
	investigation: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.investigation.item',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation',
		description: 'Record of a specific investigation',
	},
	previous: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.previous',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous',
		description: 'Reference to last assessment',
	},
	problem: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.problem',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem',
		description: 'Relevant impressions of patient state',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-status',
		description: 'draft | completed | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-subject',
		description: 'Patient or group assessed',
	},
	'supporting-info': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.supportingInfo',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-supporting-info',
		description: 'Information supporting the clinical impression',
	},
};

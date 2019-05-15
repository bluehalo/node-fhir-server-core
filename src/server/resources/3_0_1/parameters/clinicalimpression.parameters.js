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
			"Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  ",
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	action: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.action',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-action',
		description: 'Action taken as part of assessment procedure',
	},
	assessor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.assessor',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor',
		description: 'The clinician performing the assessment',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.context',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-context',
		description: 'Encounter or Episode created from',
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
};

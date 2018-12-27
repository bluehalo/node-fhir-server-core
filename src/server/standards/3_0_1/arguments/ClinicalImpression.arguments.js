module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		documentation:
			"Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  .",
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		documentation:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  .',
	},
	ACTION: {
		name: 'action',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-action',
		documentation: 'Action taken as part of assessment procedure.',
	},
	ASSESSOR: {
		name: 'assessor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor',
		documentation: 'The clinician performing the assessment.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-context',
		documentation: 'Encounter or Episode created from.',
	},
	FINDING_CODE: {
		name: 'finding-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-code',
		documentation: 'What was found.',
	},
	FINDING_REF: {
		name: 'finding-ref',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-ref',
		documentation: 'What was found.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-identifier',
		documentation: 'Business identifier.',
	},
	INVESTIGATION: {
		name: 'investigation',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation',
		documentation: 'Record of a specific investigation.',
	},
	PREVIOUS: {
		name: 'previous',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous',
		documentation: 'Reference to last assessment.',
	},
	PROBLEM: {
		name: 'problem',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem',
		documentation: 'Relevant impressions of patient state.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-status',
		documentation: 'draft | completed | entered-in-error.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-subject',
		documentation: 'Patient or group assessed.',
	},
};

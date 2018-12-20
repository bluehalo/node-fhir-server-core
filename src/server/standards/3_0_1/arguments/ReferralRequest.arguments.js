module.exports = {
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		documentation:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  .',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
		documentation:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  .',
	},
	AUTHORED_ON: {
		name: 'authored-on',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-authored-on',
		documentation: 'Creation or activation date.',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-based-on',
		documentation: 'Request being fulfilled.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-context',
		documentation: 'Part of encounter or episode of care.',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-definition',
		documentation: 'Instantiates protocol or definition.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-encounter',
		documentation: 'Originating encounter.',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-group-identifier',
		documentation: 'Part of common request.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-identifier',
		documentation: 'Business identifier.',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-intent',
		documentation: 'Proposal, plan or order.',
	},
	OCCURRENCE_DATE: {
		name: 'occurrence-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-occurrence-date',
		documentation: 'When the service(s) requested in the referral should occur.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-priority',
		documentation: 'The priority assigned to the referral.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient',
		documentation: 'The person that the referral was sent to.',
	},
	REPLACES: {
		name: 'replaces',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-replaces',
		documentation: 'Request(s) replaced by this request.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-requester',
		documentation: 'Individual making the request.',
	},
	SERVICE: {
		name: 'service',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-service',
		documentation: 'Actions requested as part of the referral.',
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty',
		documentation: 'The specialty that the referral is for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-status',
		documentation: 'The status of the referral.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-subject',
		documentation: 'Patient referred to care or transfer.',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the consent query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Consent.dateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		description:
			"Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  ",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Consent.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Consent.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	action: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Consent.action',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-action',
		description: 'Actions controlled by this consent',
	},
	actor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Consent.actor.reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-actor',
		description: 'Resource for the actor (or group, by role)',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Consent.category',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-category',
		description: 'Classification of the consent statement - for indexing/retrieval',
	},
	consentor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Consent.consentingParty',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-consentor',
		description: 'Who is agreeing to the policy and exceptions',
	},
	data: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Consent.data.reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-data',
		description: 'The actual data reference',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Consent.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-organization',
		description: 'Custodian of the consent',
	},
	period: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Consent.period',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-period',
		description: 'Period that this consent applies',
	},
	purpose: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Consent.purpose',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-purpose',
		description: 'Context of activities for which the agreement is made',
	},
	securitylabel: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Consent.securityLabel',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-securitylabel',
		description: 'Security Labels that define affected resources',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Consent.sourceAttachment',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-source',
		description: 'Source from which this consent is taken',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Consent.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Consent-status',
		description: 'draft | proposed | active | rejected | inactive | entered-in-error',
	},
};

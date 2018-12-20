module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		documentation:
			"Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  .",
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		documentation:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  .',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-category',
		documentation: 'The kind of supply (central, non-stock, etc.).',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-requester',
		documentation: 'Individual making the request.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-status',
		documentation: 'draft | active | suspended +.',
	},
	SUPPLIER: {
		name: 'supplier',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier',
		documentation: 'Who is intended to fulfill the request.',
	},
};

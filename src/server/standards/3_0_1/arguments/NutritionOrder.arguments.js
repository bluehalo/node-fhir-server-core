module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		documentation:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  .',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		documentation:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  .',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-encounter',
		documentation:
			'Multiple Resources:     * [DocumentReference](documentreference.html): Context of the document  content  * [RiskAssessment](riskassessment.html): Where was assessment performed?  * [DeviceRequest](devicerequest.html): Encounter or Episode during which request was created  * [Procedure](procedure.html): Search by encounter  * [List](list.html): Context in which list created  * [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier  * [ProcedureRequest](procedurerequest.html): An encounter in which this request is made  * [Flag](flag.html): Alert relevant during encounter  * [Observation](observation.html): Encounter related to the observation  * [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier  * [Composition](composition.html): Context of the Composition  .',
	},
	ADDITIVE: {
		name: 'additive',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-additive',
		documentation: 'Type of module component to add to the feeding.',
	},
	DATETIME: {
		name: 'datetime',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-datetime',
		documentation: 'Return nutrition orders requested on this date.',
	},
	FORMULA: {
		name: 'formula',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-formula',
		documentation: 'Type of enteral or infant formula.',
	},
	ORALDIET: {
		name: 'oraldiet',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-oraldiet',
		documentation: 'Type of diet that can be consumed orally (i.e., take via the mouth).',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-provider',
		documentation: 'The identify of the provider who placed the nutrition order.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-status',
		documentation: 'Status of the nutrition order.',
	},
	SUPPLEMENT: {
		name: 'supplement',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-supplement',
		documentation: 'Type of supplement product requested.',
	},
};

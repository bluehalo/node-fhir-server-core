module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		documentation:
			'Multiple Resources:     * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Procedure](procedure.html): A code to identify a  procedure  * [List](list.html): What the purpose of this list is  * [ProcedureRequest](procedurerequest.html): What is being requested/ordered  * [Observation](observation.html): The code of the observation type  * [DiagnosticReport](diagnosticreport.html): The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [Condition](condition.html): Code for the condition  .',
	},
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
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-based-on',
		documentation: 'Reference to the test or procedure request.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-category',
		documentation: 'The classification of the type of observation.',
	},
	CODE_VALUE_CONCEPT: {
		name: 'code-value-concept',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-concept',
		documentation: 'Code and coded value parameter pair.',
	},
	CODE_VALUE_DATE: {
		name: 'code-value-date',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-date',
		documentation: 'Code and date/time value parameter pair.',
	},
	CODE_VALUE_QUANTITY: {
		name: 'code-value-quantity',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-quantity',
		documentation: 'Code and quantity value parameter pair.',
	},
	CODE_VALUE_STRING: {
		name: 'code-value-string',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-code-value-string',
		documentation: 'Code and string value parameter pair.',
	},
	COMBO_CODE: {
		name: 'combo-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-code',
		documentation: 'The code of the observation type or component type.',
	},
	COMBO_CODE_VALUE_CONCEPT: {
		name: 'combo-code-value-concept',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-concept',
		documentation: 'Code and coded value parameter pair, including in components.',
	},
	COMBO_CODE_VALUE_QUANTITY: {
		name: 'combo-code-value-quantity',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-quantity',
		documentation: 'Code and quantity value parameter pair, including in components.',
	},
	COMBO_DATA_ABSENT_REASON: {
		name: 'combo-data-absent-reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-data-absent-reason',
		documentation:
			'The reason why the expected value in the element Observation.value[x] or Observation.component.value[x] is missing.',
	},
	COMBO_VALUE_CONCEPT: {
		name: 'combo-value-concept',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-value-concept',
		documentation: 'The value or component value of the observation, if the value is a CodeableConcept.',
	},
	COMBO_VALUE_QUANTITY: {
		name: 'combo-value-quantity',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-combo-value-quantity',
		documentation:
			'The value or component value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data).',
	},
	COMPONENT_CODE: {
		name: 'component-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code',
		documentation: 'The component code of the observation type.',
	},
	COMPONENT_CODE_VALUE_CONCEPT: {
		name: 'component-code-value-concept',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code-value-concept',
		documentation: 'Component code and component coded value parameter pair.',
	},
	COMPONENT_CODE_VALUE_QUANTITY: {
		name: 'component-code-value-quantity',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code-value-quantity',
		documentation: 'Component code and component quantity value parameter pair.',
	},
	COMPONENT_DATA_ABSENT_REASON: {
		name: 'component-data-absent-reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason',
		documentation: 'The reason why the expected value in the element Observation.component.value[x] is missing.',
	},
	COMPONENT_VALUE_CONCEPT: {
		name: 'component-value-concept',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-concept',
		documentation: 'The value of the component observation, if the value is a CodeableConcept.',
	},
	COMPONENT_VALUE_QUANTITY: {
		name: 'component-value-quantity',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity',
		documentation:
			'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data).',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-context',
		documentation: 'Healthcare event  (Episode-of-care or Encounter) related to the observation.',
	},
	DATA_ABSENT_REASON: {
		name: 'data-absent-reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason',
		documentation: 'The reason why the expected value in the element Observation.value[x] is missing.',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-device',
		documentation: 'The Device that generated the observation data.',
	},
	METHOD: {
		name: 'method',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-method',
		documentation: 'The method used for the observation.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-performer',
		documentation: 'Who performed the observation.',
	},
	RELATED: {
		name: 'related',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-related',
		documentation: 'Related Observations - search on related-type and related-target together.',
	},
	RELATED_TARGET: {
		name: 'related-target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-target',
		documentation: 'Resource that is related to this one.',
	},
	RELATED_TYPE: {
		name: 'related-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-type',
		documentation: 'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by.',
	},
	SPECIMEN: {
		name: 'specimen',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-specimen',
		documentation: 'Specimen used for this observation.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-status',
		documentation: 'The status of the observation.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-subject',
		documentation: 'The subject that the observation is about.',
	},
	VALUE_CONCEPT: {
		name: 'value-concept',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-concept',
		documentation: 'The value of the observation, if the value is a CodeableConcept.',
	},
	VALUE_DATE: {
		name: 'value-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-date',
		documentation: 'The value of the observation, if the value is a date or period of time.',
	},
	VALUE_QUANTITY: {
		name: 'value-quantity',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-quantity',
		documentation:
			'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data).',
	},
	VALUE_STRING: {
		name: 'value-string',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-string',
		documentation: 'The value of the observation, if the value is a string, and also searches in CodeableConcept.text.',
	},
};

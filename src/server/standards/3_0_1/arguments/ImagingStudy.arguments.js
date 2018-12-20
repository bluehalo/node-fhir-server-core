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
	ACCESSION: {
		name: 'accession',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-accession',
		documentation: 'The accession identifier for the study.',
	},
	BASEDON: {
		name: 'basedon',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-basedon',
		documentation: 'The order for the image.',
	},
	BODYSITE: {
		name: 'bodysite',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite',
		documentation: 'The body site studied.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-context',
		documentation: 'The context of the study.',
	},
	DICOM_CLASS: {
		name: 'dicom-class',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class',
		documentation: 'The type of the instance.',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-endpoint',
		documentation: 'The endpoint for te study or series.',
	},
	MODALITY: {
		name: 'modality',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-modality',
		documentation: 'The modality of the series.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-performer',
		documentation: 'The person who performed the study.',
	},
	REASON: {
		name: 'reason',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-reason',
		documentation: 'The reason for the study.',
	},
	SERIES: {
		name: 'series',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-series',
		documentation: 'The identifier of the series of images.',
	},
	STARTED: {
		name: 'started',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-started',
		documentation: 'When the study was started.',
	},
	STUDY: {
		name: 'study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-study',
		documentation: 'The study identifier for the image.',
	},
	UID: {
		name: 'uid',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-uid',
		documentation: 'The instance unique identifier.',
	},
};

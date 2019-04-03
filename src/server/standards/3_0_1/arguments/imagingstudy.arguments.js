/**
 * @name exports
 * @static
 * @summary Arguments for the imagingstudy query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	accession: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.accession',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-accession',
		description: 'The accession identifier for the study',
	},
	basedon: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-basedon',
		description: 'The order for the image',
	},
	bodysite: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite',
		description: 'The body site studied',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.context',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-context',
		description: 'The context of the study',
	},
	'dicom-class': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.instance.sopClass',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class',
		description: 'The type of the instance',
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-endpoint',
		description: 'The endpoint for te study or series',
	},
	modality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.modality',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-modality',
		description: 'The modality of the series',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingStudy.series.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-performer',
		description: 'The person who performed the study',
	},
	reason: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingStudy.reason',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-reason',
		description: 'The reason for the study',
	},
	series: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-series',
		description: 'The identifier of the series of images',
	},
	started: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImagingStudy.started',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-started',
		description: 'When the study was started',
	},
	study: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-study',
		description: 'The study identifier for the image',
	},
	uid: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.instance.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingStudy-uid',
		description: 'The instance unique identifier',
	},
};

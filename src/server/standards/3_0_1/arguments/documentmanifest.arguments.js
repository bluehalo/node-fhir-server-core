/**
 * @name exports
 * @static
 * @summary Arguments for the documentmanifest query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.masterIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.type',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  ',
	},
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.author',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-author',
		description: 'Who and/or what authored the manifest',
	},
	'content-ref': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.content.pReference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-content-ref',
		description: 'Contents of this set of documents',
	},
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DocumentManifest.created',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-created',
		description: 'When this document manifest created',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DocumentManifest.description',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-description',
		description: 'Human-readable description (title)',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient',
		description: 'Intended to get notified about this set of documents',
	},
	'related-id': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.related.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id',
		description: 'Identifiers of things that are related',
	},
	'related-ref': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.related.ref',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref',
		description: 'Related Resource',
	},
	source: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'DocumentManifest.source',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-source',
		description: 'The source system/application/software',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-status',
		description: 'current | superseded | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-subject',
		description: 'The subject of the set of documents',
	},
};

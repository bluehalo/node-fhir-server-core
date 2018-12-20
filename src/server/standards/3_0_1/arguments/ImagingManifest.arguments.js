module.exports = {
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		documentation:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  .',
	},
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-author',
		documentation: 'Author of the ImagingManifest (or a DICOM Key Object Selection which it represents).',
	},
	AUTHORING_TIME: {
		name: 'authoring-time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-authoring-time',
		documentation: 'Time of the ImagingManifest (or a DICOM Key Object Selection which it represents) authoring.',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-endpoint',
		documentation: 'The endpoint for the study or series.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-identifier',
		documentation: 'UID of the ImagingManifest (or a DICOM Key Object Selection which it represents).',
	},
	IMAGING_STUDY: {
		name: 'imaging-study',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-imaging-study',
		documentation:
			'ImagingStudy resource selected in the ImagingManifest (or a DICOM Key Object Selection which it represents).',
	},
	SELECTED_STUDY: {
		name: 'selected-study',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-selected-study',
		documentation: 'Study selected in the ImagingManifest (or a DICOM Key Object Selection which it represents).',
	},
};

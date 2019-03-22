/**
 * @name exports
 * @static
 * @summary Arguments for the imagingmanifest query
 */
module.exports = {
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingManifest.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingManifest.author',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-author',
		description: 'Author of the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	'authoring-time': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ImagingManifest.authoringTime',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-authoring-time',
		description: 'Time of the ImagingManifest (or a DICOM Key Object Selection which it represents) authoring',
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingManifest.study.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-endpoint',
		description: 'The endpoint for the study or series',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ImagingManifest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-identifier',
		description: 'UID of the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	'imaging-study': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ImagingManifest.study.imagingStudy',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-imaging-study',
		description:
			'ImagingStudy resource selected in the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
	'selected-study': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ImagingManifest.study.uid',
		definition: 'http://hl7.org/fhir/SearchParameter/ImagingManifest-selected-study',
		description: 'Study selected in the ImagingManifest (or a DICOM Key Object Selection which it represents)',
	},
};

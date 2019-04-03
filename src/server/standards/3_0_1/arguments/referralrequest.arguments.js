/**
 * @name exports
 * @static
 * @summary Arguments for the referralrequest query
 */
module.exports = {
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.type',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  ',
	},
	'authored-on': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ReferralRequest.authoredOn',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-authored-on',
		description: 'Creation or activation date',
	},
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-based-on',
		description: 'Request being fulfilled',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.context',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-context',
		description: 'Part of encounter or episode of care',
	},
	definition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.definition',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-definition',
		description: 'Instantiates protocol or definition',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.context',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-encounter',
		description: 'Originating encounter',
	},
	'group-identifier': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.groupIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-group-identifier',
		description: 'Part of common request',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-identifier',
		description: 'Business identifier',
	},
	intent: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.intent',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-intent',
		description: 'Proposal, plan or order',
	},
	'occurrence-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ReferralRequest.occurrenceDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-occurrence-date',
		description: 'When the service(s) requested in the referral should occur',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-priority',
		description: 'The priority assigned to the referral',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient',
		description: 'The person that the referral was sent to',
	},
	replaces: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.replaces',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-replaces',
		description: 'Request(s) replaced by this request',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.requester.agent',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-requester',
		description: 'Individual making the request',
	},
	service: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.serviceRequested',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-service',
		description: 'Actions requested as part of the referral',
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty',
		description: 'The specialty that the referral is for',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-status',
		description: 'The status of the referral',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-subject',
		description: 'Patient referred to care or transfer',
	},
};

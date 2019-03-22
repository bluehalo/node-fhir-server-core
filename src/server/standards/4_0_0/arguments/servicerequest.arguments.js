/**
 * @name exports
 * @static
 * @summary Arguments for the servicerequest query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.code',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-encounter',
		description:
			'Multiple Resources:     * [Composition](composition.html): Context of the Composition  * [DeviceRequest](devicerequest.html): Encounter during which request was created  * [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made  * [DocumentReference](documentreference.html): Context of the document  content  * [Flag](flag.html): Alert relevant during encounter  * [List](list.html): Context in which list created  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier  * [Observation](observation.html): Encounter related to the observation  * [Procedure](procedure.html): Encounter created as part of  * [RiskAssessment](riskassessment.html): Where was assessment performed?  * [ServiceRequest](servicerequest.html): An encounter in which this request is made  * [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier  ',
	},
	authored: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ServiceRequest.authoredOn',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-authored',
		description: 'Date request signed',
	},
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-based-on',
		description: 'What request fulfills',
	},
	'body-site': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-body-site',
		description: 'Where procedure is going to be done',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.category',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-category',
		description: 'Classification of service',
	},
	'instantiates-canonical': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.instantiatesCanonical',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-instantiates-canonical',
		description: 'Instantiates FHIR protocol or definition',
	},
	'instantiates-uri': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ServiceRequest.instantiatesUri',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-instantiates-uri',
		description: 'Instantiates external protocol or definition',
	},
	intent: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.intent',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-intent',
		description: 'proposal | plan | order +',
	},
	occurrence: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ServiceRequest.occurrenceDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-occurrence',
		description: 'When service should occur',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-performer',
		description: 'Requested performer',
	},
	'performer-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.performerType',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-performer-type',
		description: 'Performer role',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-priority',
		description: 'routine | urgent | asap | stat',
	},
	replaces: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.replaces',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-replaces',
		description: 'What request replaces',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.requester',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-requester',
		description: 'Who/what is requesting service',
	},
	requisition: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.requisition',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-requisition',
		description: 'Composite Request ID',
	},
	specimen: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.specimen',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-specimen',
		description: 'Specimen to be tested',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ServiceRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-status',
		description: 'draft | active | suspended | completed | entered-in-error | cancelled',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ServiceRequest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/ServiceRequest-subject',
		description: 'Search by subject',
	},
};

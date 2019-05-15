/**
 * @name exports
 * @static
 * @summary Arguments for the immunization query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Immunization.occurrenceDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		description:
			"Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded  * [CarePlan](careplan.html): Time period plan covers  * [CareTeam](careteam.html): Time period team covers  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  * [Composition](composition.html): Composition editing time  * [Consent](consent.html): When this Consent was created or indexed  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated  * [Flag](flag.html): Time period when flag is active  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [List](list.html): When the list was prepared  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [Procedure](procedure.html): When the procedure was performed  * [RiskAssessment](riskassessment.html): When was assessment made?  * [SupplyRequest](supplyrequest.html): When the request was made  ",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.location',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-location',
		description: 'The service delivery location or facility in which the vaccine was / was to be administered',
	},
	'lot-number': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Immunization.lotNumber',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-lot-number',
		description: 'Vaccine Lot Number',
	},
	manufacturer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.manufacturer',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-manufacturer',
		description: 'Vaccine Manufacturer',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.performer.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-performer',
		description: 'The practitioner or organization who played a role in the vaccination',
	},
	reaction: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.reaction.detail',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-reaction',
		description: 'Additional information on reaction',
	},
	'reaction-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Immunization.reaction.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-reaction-date',
		description: 'When reaction started',
	},
	'reason-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.reasonCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-reason-code',
		description: 'Reason why the vaccine was administered',
	},
	'reason-reference': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.reasonReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-reason-reference',
		description: 'Why immunization occurred',
	},
	series: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Immunization.protocolApplied.series',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-series',
		description: 'The series being followed by the provider',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-status',
		description: 'Immunization event status',
	},
	'status-reason': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.statusReason',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-status-reason',
		description: 'Reason why the vaccine was not administered',
	},
	'target-disease': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.protocolApplied.targetDisease',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-target-disease',
		description: 'The target disease the dose is being administered against',
	},
	'vaccine-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.vaccineCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-vaccine-code',
		description: 'Vaccine Product Administered',
	},
};

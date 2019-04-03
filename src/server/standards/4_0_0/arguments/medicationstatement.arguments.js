/**
 * @name exports
 * @static
 * @summary Arguments for the medicationstatement query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.medicationCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [CareTeam](careteam.html): External Ids for this team  * [Composition](composition.html): Version-independent identifier for the Composition  * [Condition](condition.html): A unique identifier of the condition record  * [Consent](consent.html): Identifier for this record (external references)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Goal](goal.html): External Ids for this goal  * [ImagingStudy](imagingstudy.html): Identifiers for the Study, such as DICOM Study Instance UID and Accession number  * [Immunization](immunization.html): Business identifier  * [List](list.html): Business identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationDispense](medicationdispense.html): Returns dispenses with this external identifier  * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Observation](observation.html): The unique id for a particular observation  * [Procedure](procedure.html): A unique identifier for a procedure  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [ServiceRequest](servicerequest.html): Identifiers assigned to this order  * [SupplyDelivery](supplydelivery.html): External identifier  * [SupplyRequest](supplyrequest.html): Business Identifier for SupplyRequest  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  ',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who the care plan is for  * [CareTeam](careteam.html): Who care team is for  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  * [Composition](composition.html): Who and/or what the composition is about  * [Condition](condition.html): Who has the condition?  * [Consent](consent.html): Who the consent applies to  * [DetectedIssue](detectedissue.html): Associated patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [Encounter](encounter.html): The patient or group present at the encounter  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Flag](flag.html): The identity of a subject to list flags for  * [Goal](goal.html): Who this goal is intended for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [Immunization](immunization.html): The patient for the vaccination record  * [List](list.html): If all resources have the same subject  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Observation](observation.html): The subject that the observation is about (if patient)  * [Procedure](procedure.html): Search by subject - a patient  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [ServiceRequest](servicerequest.html): Search by subject - a patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  ',
	},
	medication: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.medicationReference',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-medication',
		description:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine resource  * [MedicationRequest](medicationrequest.html): Return prescriptions for this medication reference  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  ',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.status',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-status',
		description:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationDispense](medicationdispense.html): Returns dispenses with a specified dispense status  * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  ',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicationStatement.category',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-category',
		description: 'Returns statements of this category of medicationstatement',
	},
	context: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.context',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-context',
		description: 'Returns statements for a specific context (episode or episode of Care).',
	},
	effective: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'MedicationStatement.effectiveDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-effective',
		description: 'Date when patient was taking (or not taking) the medication',
	},
	'part-of': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-part-of',
		description: 'Returns statements that are part of another event.',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.informationSource',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-source',
		description: 'Who or where the information in the statement came from',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicationStatement.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-subject',
		description: 'The identity of a patient, animal or group to list statements for',
	},
};

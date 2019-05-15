/**
 * @name exports
 * @static
 * @summary Arguments for the immunization query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Immunization.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-date',
		description: 'Vaccination  (non)-Administration Date',
	},
	'dose-sequence': {
		type: 'number',
		fhirtype: 'number',
		xpath: 'Immunization.vaccinationProtocol.doseSequence',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-dose-sequence',
		description: 'Dose number within series',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-identifier',
		description: 'Business identifier',
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
	notgiven: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.wasNotGiven',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-notgiven',
		description: 'Administrations which were not given',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-patient',
		description: 'The patient for the vaccination record',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-performer',
		description: 'The practitioner who administered the vaccination',
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
	reason: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.explanation.reason',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-reason',
		description: 'Why immunization occurred',
	},
	'reason-not-given': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.explanation.reasonNotGiven',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-reason-not-given',
		description: 'Explanation of reason vaccination was not administered',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Immunization.requester',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-requester',
		description: 'The practitioner who ordered the vaccination',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-status',
		description: 'Immunization event status',
	},
	'vaccine-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Immunization.vaccineCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Immunization-vaccine-code',
		description: 'Vaccine Product Administered',
	},
};

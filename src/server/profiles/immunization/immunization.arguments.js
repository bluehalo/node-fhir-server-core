/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Vaccination (non)-Administration Date'
	},
	DOSE_SEQUENCE: {
		name: 'dose-sequence',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Dose number within series'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Business identifier'
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'The service delivery location or facility in which the vaccine was / was to be administered'
	},
	LOT_NUMBER: {
		name: 'lot-number',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Vaccine Lot Number'
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Vaccine Manufacturer'
	},
	NOTGIVEN: {
		name: 'notgiven',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Administrations which were not given'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'The patient for the vaccination record'
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'The practitioner who played a role in the vaccination'
	},
	REACTION: {
		name: 'reaction',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Additional information on reaction'
	},
	REACTION_DATE: {
		name: 'reaction-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'When reaction started'
	},
	REASON: {
		name: 'reason',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Why immunization occurred'
	},
	REASON_NOT_GIVEN: {
		name: 'reason-not-given',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Explanation of reason vaccination was not administered'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Immunization event status'
	},
	VACCINE_CODE: {
		name: 'vaccine-code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#immunization',
		documentation: 'Vaccine Product Administered'
	}
};

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Returns statements of this category of medicationstatement'
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Return statements of this medication code'
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Returns statements for a specific context (episode or episode of Care).'
	},
	EFFECTIVE: {
		name: 'effective',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Date when patient was taking (or not taking) the medication'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Return statements with this external identifier'
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Return statements of this medication reference'
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Returns statements that are part of another event.'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Returns statements for a specific patient.'
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Who or where the information in the statement came from'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'Return statements that match the given status'
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationstatement',
		documentation: 'The identity of a patient, animal or group to list statements for'
	}
};

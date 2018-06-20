/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'A search by a condition code',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'When history was captured/updated',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'Instantiates protocol or definition',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'A search by a gender code of a family member',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'A search by a record identifier',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'The identity of a subject to list family member history items for',
	},
	RELATIONSHIP: {
		name: 'relationship',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'A search by a relationship type',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#familymemberhistory',
		documentation: 'partial | completed | entered-in-error | health-unknown',
	},
};

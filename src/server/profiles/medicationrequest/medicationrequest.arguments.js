/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	AUTHOREDON: {
		name: 'authoredon',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Return prescriptions written on this date'
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Returns prescriptions with different categories'
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Return prescriptions of this medication code'
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Return prescriptions with this encounter or episode of care identifier'
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Multiple Resources: MedicationRequest: Returns medication request to be administered on a specific date'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Return prescriptions with this external identifier'
	},
	INTENDED_DISPENSER: {
		name: 'intended-dispenser',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Returns prescriptions intended to be dispensed by this Organization'
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Returns prescriptions with different intents'
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Return prescriptions of this medication reference'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Returns prescriptions for a specific patient'
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: 'Returns prescriptions with different priorities'
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: ''
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: ''
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationrequest',
		documentation: ''
	}
};

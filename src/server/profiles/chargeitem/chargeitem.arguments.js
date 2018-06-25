/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACCOUNT: {
		name: 'account',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Account to place this charge',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'A code that identifies the charge, like a billing code',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Encounter / Episode associated with event',
	},
	ENTERED_DATE: {
		name: 'entered-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Date the charge item was entered',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Individual who was entering',
	},
	FACTOR_OVERRIDE: {
		name: 'factor-override',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Factor overriding the associated rules',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Business Identifier for item',
	},
	OCCURRENCE: {
		name: 'occurrence',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'When the charged service was applied',
	},
	PARTICIPANT_ACTOR: {
		name: 'participant-actor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Individual who was performing',
	},
	PARTICIPANT_ROLE: {
		name: 'participant-role',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'What type of performance was done',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Individual service was done for/to',
	},
	PERFORMING_ORGANIZATION: {
		name: 'performing-organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Organization providing the charged sevice',
	},
	PRICE_OVERRIDE: {
		name: 'price-override',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Price overriding the associated rules',
	},
	QUANTITY: {
		name: 'quantity',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Quantity of which the charge item has been serviced',
	},
	REQUESTING_ORGANIZATION: {
		name: 'requesting-organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Organization requesting the charged service',
	},
	SERVICE: {
		name: 'service',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Which rendered service is being charged?',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#chargeitem',
		documentation: 'Individual service was done for/to',
	},
};

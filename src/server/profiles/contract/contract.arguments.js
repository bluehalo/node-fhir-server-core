/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AGENT: {
		name: 'agent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'Agent to the Contact',
	},
	AUTHORITY: {
		name: 'authority',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The authority of the contract',
	},
	DOMAIN: {
		name: 'domain',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The domain of the contract',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The identity of the contract',
	},
	ISSUED: {
		name: 'issued',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The date/time the contract was issued',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The identity of the subject of the contract (if a patient)',
	},
	SIGNER: {
		name: 'signer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'Contract Signatory Party',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The identity of the subject of the contract',
	},
	TERM_TOPIC: {
		name: 'term-topic',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#contract',
		documentation: 'The identity of the topic of the contract terms',
	},
};

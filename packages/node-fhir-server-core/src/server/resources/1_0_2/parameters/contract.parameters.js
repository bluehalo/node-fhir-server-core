/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
	actor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.actor.entity',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-actor',
		description: 'Contract Actor Type',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Contract.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-identifier',
		description: 'The identity of the contract',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-patient',
		description: 'The identity of the target of the contract (if a patient)',
	},
	signer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.signer.party',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-signer',
		description: 'Contract Signatory Party',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-subject',
		description: 'The identity of the target of the contract',
	},
};

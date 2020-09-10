/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
	authority: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.authority',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-authority',
		description: 'The authority of the contract',
	},
	domain: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.domain',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-domain',
		description: 'The domain of the contract',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Contract.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-identifier',
		description: 'The identity of the contract',
	},
	instantiates: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Contract.instantiatesUri',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-instantiates',
		description: 'A source definition of the contract',
	},
	issued: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Contract.issued',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-issued',
		description: 'The date/time the contract was issued',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-patient',
		description: 'The identity of the subject of the contract (if a patient)',
	},
	signer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.signer.party',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-signer',
		description: 'Contract Signatory Party',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Contract.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-status',
		description: 'The status of the contract',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-subject',
		description: 'The identity of the subject of the contract',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Contract.url',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-url',
		description: 'The basal contract definition',
	},
};

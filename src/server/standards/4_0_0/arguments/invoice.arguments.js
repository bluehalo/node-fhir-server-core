/**
 * @name exports
 * @static
 * @summary Arguments for the invoice query
 */
module.exports = {
	account: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Invoice.account',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-account',
		description: 'Account that is being balanced',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Invoice.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-date',
		description: 'Invoice date / posting date',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Invoice.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-identifier',
		description: 'Business Identifier for item',
	},
	issuer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Invoice.issuer',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-issuer',
		description: 'Issuing Organization of Invoice',
	},
	participant: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Invoice.participant.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-participant',
		description: 'Individual who was involved',
	},
	'participant-role': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Invoice.participant.role',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-participant-role',
		description: 'Type of involvement in creation of this Invoice',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Invoice.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-patient',
		description: 'Recipient(s) of goods and services',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Invoice.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-recipient',
		description: 'Recipient of this invoice',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Invoice.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-status',
		description: 'draft | issued | balanced | cancelled | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Invoice.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-subject',
		description: 'Recipient(s) of goods and services',
	},
	totalgross: {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'Invoice.totalGross',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-totalgross',
		description: 'Gross total of this Invoice',
	},
	totalnet: {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'Invoice.totalNet',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-totalnet',
		description: 'Net total of this Invoice',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Invoice.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Invoice-type',
		description: 'Type of Invoice',
	},
};

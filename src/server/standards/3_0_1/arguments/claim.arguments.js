/**
 * @name exports
 * @static
 * @summary Arguments for the claim query
 */
module.exports = {
	'care-team': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.careTeam.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-care-team',
		description: 'Member of the CareTeam',
	},
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Claim.created',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-created',
		description: 'The creation date for the Claim',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.item.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-encounter',
		description: 'Encounters associated with a billed line item',
	},
	enterer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.enterer',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-enterer',
		description: 'The party responsible for the entry of the Claim',
	},
	facility: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.facility',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-facility',
		description: 'Facility responsible for the goods and services',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Claim.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-identifier',
		description: 'The primary identifier of the financial resource',
	},
	insurer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.insurer',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-insurer',
		description: 'The target payor/insurer for the Claim',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-organization',
		description: 'The reference to the providing organization',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-patient',
		description: 'Patient receiving the services',
	},
	payee: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.payee.party',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-payee',
		description: 'The party receiving any payment for the Claim',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Claim.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-priority',
		description: 'Processing priority requested',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Claim.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-provider',
		description: 'Provider responsible for the Claim',
	},
	use: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Claim.use',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-use',
		description: 'The kind of financial resource',
	},
};

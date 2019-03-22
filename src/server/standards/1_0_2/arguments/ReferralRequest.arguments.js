/**
 * @name exports
 * @static
 * @summary Arguments for the referralrequest query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ReferralRequest.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-date',
		description: 'Creation or activation date',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-patient',
		description: 'Who the referral is about',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-priority',
		description: 'The priority assigned to the referral',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient',
		description: 'The person that the referral was sent to',
	},
	requester: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ReferralRequest.requester',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-requester',
		description: 'Requester of referral / transfer of care',
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty',
		description: 'The specialty that the referral is for',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-status',
		description: 'The status of the referral',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ReferralRequest.type',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-type',
		description: 'The type of the referral',
	},
};

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-date',
		description: 'Creation or activation date.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-patient',
		description: 'Who the referral is about.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-priority',
		description: 'The priority assigned to the referral.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient',
		description: 'The person that the referral was sent to.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-requester',
		description: 'Requester of referral / transfer of care.',
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty',
		description: 'The specialty that the referral is for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-status',
		description: 'The status of the referral.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-type',
		description: 'The type of the referral.',
	},
};

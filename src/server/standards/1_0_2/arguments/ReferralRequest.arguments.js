module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-date',
		documentation: 'Creation or activation date.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-patient',
		documentation: 'Who the referral is about.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-priority',
		documentation: 'The priority assigned to the referral.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient',
		documentation: 'The person that the referral was sent to.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-requester',
		documentation: 'Requester of referral / transfer of care.',
	},
	SPECIALTY: {
		name: 'specialty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty',
		documentation: 'The specialty that the referral is for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-status',
		documentation: 'The status of the referral.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-type',
		documentation: 'The type of the referral.',
	},
};

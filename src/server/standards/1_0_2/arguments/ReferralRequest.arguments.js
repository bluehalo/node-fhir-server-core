module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-date',
		description: 'Creation or activation date.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-patient',
		description: 'Who the referral is about.',
	},
	PRIORITY: {
		name: 'Priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-priority',
		description: 'The priority assigned to the referral.',
	},
	RECIPIENT: {
		name: 'Recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient',
		description: 'The person that the referral was sent to.',
	},
	REQUESTER: {
		name: 'Requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-requester',
		description: 'Requester of referral / transfer of care.',
	},
	SPECIALTY: {
		name: 'Specialty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty',
		description: 'The specialty that the referral is for.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-status',
		description: 'The status of the referral.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ReferralRequest-type',
		description: 'The type of the referral.',
	},
};

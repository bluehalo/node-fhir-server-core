module.exports = {
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-category',
		description: 'E.g. Treatment, dietary, behavioral, etc.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-identifier',
		description: 'External Ids for this goal.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-patient',
		description: 'Who this goal is intended for.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-status',
		description: 'proposed | planned | accepted | rejected | in-progress | achieved | sustaining | on-hold | cancelled.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-subject',
		description: 'Who this goal is intended for.',
	},
	TARGETDATE: {
		name: 'Targetdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-targetdate',
		description: 'Reach goal on or before.',
	},
};

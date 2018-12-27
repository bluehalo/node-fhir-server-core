module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-category',
		documentation: 'E.g. Treatment, dietary, behavioral, etc.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-identifier',
		documentation: 'External Ids for this goal.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-patient',
		documentation: 'Who this goal is intended for.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-status',
		documentation:
			'proposed | planned | accepted | rejected | in-progress | achieved | sustaining | on-hold | cancelled.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-subject',
		documentation: 'Who this goal is intended for.',
	},
	TARGETDATE: {
		name: 'targetdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-targetdate',
		documentation: 'Reach goal on or before.',
	},
};

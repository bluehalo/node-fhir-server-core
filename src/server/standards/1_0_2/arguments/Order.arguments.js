module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-date',
		description: 'When the order was made.',
	},
	DETAIL: {
		name: 'Detail',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-detail',
		description: 'What action is being ordered.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-identifier',
		description: 'Instance id from source, target, and/or  others.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-patient',
		description: 'Patient this order is about.',
	},
	SOURCE: {
		name: 'Source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-source',
		description: 'Who initiated the order.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-subject',
		description: 'Patient this order is about.',
	},
	TARGET: {
		name: 'Target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-target',
		description: 'Who is intended to fulfill the order.',
	},
	WHEN: {
		name: 'When',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-when',
		description: 'A formal schedule.',
	},
	WHEN_CODE: {
		name: 'When_code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-whencode',
		description: 'Code specifies when request should be done. The code may simply be a priority code.',
	},
};

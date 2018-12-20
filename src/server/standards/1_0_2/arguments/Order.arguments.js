module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-date',
		documentation: 'When the order was made.',
	},
	DETAIL: {
		name: 'detail',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-detail',
		documentation: 'What action is being ordered.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-identifier',
		documentation: 'Instance id from source, target, and/or  others.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-patient',
		documentation: 'Patient this order is about.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-source',
		documentation: 'Who initiated the order.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-subject',
		documentation: 'Patient this order is about.',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-target',
		documentation: 'Who is intended to fulfill the order.',
	},
	WHEN: {
		name: 'when',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-when',
		documentation: 'A formal schedule.',
	},
	WHEN_CODE: {
		name: 'when_code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-whencode',
		documentation: 'Code specifies when request should be done. The code may simply be a priority code.',
	},
};

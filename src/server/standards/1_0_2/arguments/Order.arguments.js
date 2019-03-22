/**
 * @name exports
 * @static
 * @summary Arguments for the order query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Order.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-date',
		description: 'When the order was made',
	},
	detail: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Order.detail',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-detail',
		description: 'What action is being ordered',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Order.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-identifier',
		description: 'Instance id from source, target, and/or  others',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Order.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-patient',
		description: 'Patient this order is about',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Order.source',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-source',
		description: 'Who initiated the order',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Order.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-subject',
		description: 'Patient this order is about',
	},
	target: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Order.target',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-target',
		description: 'Who is intended to fulfill the order',
	},
	when: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Order.when.schedule',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-when',
		description: 'A formal schedule',
	},
	when_code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Order.when.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Order-whencode',
		description: 'Code specifies when request should be done. The code may simply be a priority code',
	},
};

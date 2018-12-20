module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-code',
		documentation: 'pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-date',
		documentation: 'When the response was made.',
	},
	FULFILLMENT: {
		name: 'fulfillment',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-fulfillment',
		documentation: 'Details of the outcome of performing the order.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-identifier',
		documentation: 'Identifiers assigned to this order by the orderer or by the receiver.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-request',
		documentation: 'The order that this is a response to.',
	},
	WHO: {
		name: 'who',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-who',
		documentation: 'Who made the response.',
	},
};

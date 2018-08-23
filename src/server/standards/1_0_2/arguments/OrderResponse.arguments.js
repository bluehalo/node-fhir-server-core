module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-code',
		description: 'pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-date',
		description: 'When the response was made.',
	},
	FULFILLMENT: {
		name: 'Fulfillment',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-fulfillment',
		description: 'Details of the outcome of performing the order.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-identifier',
		description: 'Identifiers assigned to this order by the orderer or by the receiver.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-request',
		description: 'The order that this is a response to.',
	},
	WHO: {
		name: 'Who',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-who',
		description: 'Who made the response.',
	},
};

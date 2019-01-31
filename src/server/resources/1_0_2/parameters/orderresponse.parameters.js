/**
 * @name exports
 * @static
 * @summary Arguments for the orderresponse query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrderResponse.orderStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-code',
		description: 'pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'OrderResponse.date',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-date',
		description: 'When the response was made',
	},
	fulfillment: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrderResponse.fulfillment',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-fulfillment',
		description: 'Details of the outcome of performing the order',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'OrderResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-identifier',
		description: 'Identifiers assigned to this order by the orderer or by the receiver',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrderResponse.request',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-request',
		description: 'The order that this is a response to',
	},
	who: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'OrderResponse.who',
		definition: 'http://hl7.org/fhir/SearchParameter/OrderResponse-who',
		description: 'Who made the response',
	},
};

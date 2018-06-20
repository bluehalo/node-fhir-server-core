/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplyrequest',
		documentation: 'The kind of supply (central, non-stock, etc.)',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplyrequest',
		documentation: 'When the request was made',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplyrequest',
		documentation: 'Unique identifier',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplyrequest',
		documentation: 'Individual making the request',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplyrequest',
		documentation: 'draft | active | suspended +',
	},
	SUPPLIER: {
		name: 'supplier',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplyrequest',
		documentation: 'Who is intended to fulfill the request',
	},
};

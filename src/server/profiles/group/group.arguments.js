/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTUAL: {
		name: 'actual',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'Descriptive or actual',
	},
	CHARACTERISTIC: {
		name: 'characteristic',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'Kind of characteristic',
	},
	CHARACTERISTIC_VALUE: {
		name: 'characteristic-value',
		type: 'composite',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'A composite of both characteristic and value',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'The kind of resources contained',
	},
	EXCLUDE: {
		name: 'exclude',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'Group includes or excludes',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'Unique id',
	},
	MEMBER: {
		name: 'member',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'Reference to the group member',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'The type of resources the group contains',
	},
	VALUE: {
		name: 'value',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#group',
		documentation: 'Value held by characteristic',
	},
};

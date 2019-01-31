/**
 * @name exports
 * @static
 * @summary Arguments for the group query
 */
module.exports = {
	actual: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.actual',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-actual',
		description: 'Descriptive or actual',
	},
	characteristic: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.characteristic.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic',
		description: 'Kind of characteristic',
	},
	'characteristic-value': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic-value',
		description: 'A composite of both characteristic and value',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-code',
		description: 'The kind of resources contained',
	},
	exclude: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.characteristic.exclude',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-exclude',
		description: 'Group includes or excludes',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-identifier',
		description: 'Unique id',
	},
	member: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Group.member.entity',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-member',
		description: 'Reference to the group member',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-type',
		description: 'The type of resources the group contains',
	},
	value: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Group.characteristic.valueCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-value',
		description: 'Value held by characteristic',
	},
};

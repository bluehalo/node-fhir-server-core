module.exports = {
	ACTUAL: {
		name: 'actual',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-actual',
		description: 'Descriptive or actual.',
	},
	CHARACTERISTIC: {
		name: 'characteristic',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic',
		description: 'Kind of characteristic.',
	},
	CHARACTERISTIC_VALUE: {
		name: 'characteristic-value',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic-value',
		description: 'A composite of both characteristic and value.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-code',
		description: 'The kind of resources contained.',
	},
	EXCLUDE: {
		name: 'exclude',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-exclude',
		description: 'Group includes or excludes.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-identifier',
		description: 'Unique id.',
	},
	MEMBER: {
		name: 'member',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-member',
		description: 'Reference to the group member.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-type',
		description: 'The type of resources the group contains.',
	},
	VALUE: {
		name: 'value',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-value',
		description: 'Value held by characteristic.',
	},
};

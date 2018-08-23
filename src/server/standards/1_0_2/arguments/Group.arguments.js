module.exports = {
	ACTUAL: {
		name: 'Actual',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-actual',
		description: 'Descriptive or actual.',
	},
	CHARACTERISTIC: {
		name: 'Characteristic',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic',
		description: 'Kind of characteristic.',
	},
	CHARACTERISTIC_VALUE: {
		name: 'Characteristic_value',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic-value',
		description: 'A composite of both characteristic and value.',
	},
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-code',
		description: 'The kind of resources contained.',
	},
	EXCLUDE: {
		name: 'Exclude',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-exclude',
		description: 'Group includes or excludes.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-identifier',
		description: 'Unique id.',
	},
	MEMBER: {
		name: 'Member',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-member',
		description: 'Reference to the group member.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-type',
		description: 'The type of resources the group contains.',
	},
	VALUE: {
		name: 'Value',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-value',
		description: 'Value held by characteristic.',
	},
};

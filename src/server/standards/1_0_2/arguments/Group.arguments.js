module.exports = {
	ACTUAL: {
		name: 'actual',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-actual',
		documentation: 'Descriptive or actual.',
	},
	CHARACTERISTIC: {
		name: 'characteristic',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic',
		documentation: 'Kind of characteristic.',
	},
	CHARACTERISTIC_VALUE: {
		name: 'characteristic-value',
		type: 'composite',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-characteristic-value',
		documentation: 'A composite of both characteristic and value.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-code',
		documentation: 'The kind of resources contained.',
	},
	EXCLUDE: {
		name: 'exclude',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-exclude',
		documentation: 'Group includes or excludes.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-identifier',
		documentation: 'Unique id.',
	},
	MEMBER: {
		name: 'member',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-member',
		documentation: 'Reference to the group member.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-type',
		documentation: 'The type of resources the group contains.',
	},
	VALUE: {
		name: 'value',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Group-value',
		documentation: 'Value held by characteristic.',
	},
};

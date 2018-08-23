module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-identifier',
		description: 'An external identifier for the test report.',
	},
	ISSUED: {
		name: 'Issued',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-issued',
		description: 'The test report generation date.',
	},
	PARTICIPANT: {
		name: 'Participant',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-participant',
		description: 'The reference to a participant in the test execution.',
	},
	RESULT: {
		name: 'Result',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-result',
		description: 'The result disposition of the test execution.',
	},
	TESTER: {
		name: 'Tester',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-tester',
		description: 'The name of the testing organization.',
	},
	TESTSCRIPT: {
		name: 'Testscript',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-testscript',
		description: 'The test script executed to produce this report.',
	},
};

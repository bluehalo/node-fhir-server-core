module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-identifier',
		documentation: 'An external identifier for the test report.',
	},
	ISSUED: {
		name: 'issued',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-issued',
		documentation: 'The test report generation date.',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-participant',
		documentation: 'The reference to a participant in the test execution.',
	},
	RESULT: {
		name: 'result',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-result',
		documentation: 'The result disposition of the test execution.',
	},
	TESTER: {
		name: 'tester',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-tester',
		documentation: 'The name of the testing organization.',
	},
	TESTSCRIPT: {
		name: 'testscript',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-testscript',
		documentation: 'The test script executed to produce this report.',
	},
};

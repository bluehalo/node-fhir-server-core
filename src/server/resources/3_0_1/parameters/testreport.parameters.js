/**
 * @name exports
 * @static
 * @summary Arguments for the testreport query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestReport.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-identifier',
		description: 'An external identifier for the test report',
	},
	issued: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'TestReport.issued',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-issued',
		description: 'The test report generation date',
	},
	participant: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'TestReport.participant.uri',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-participant',
		description: 'The reference to a participant in the test execution',
	},
	result: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'TestReport.result',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-result',
		description: 'The result disposition of the test execution',
	},
	tester: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'TestReport.tester',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-tester',
		description: 'The name of the testing organization',
	},
	testscript: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'TestReport.testScript',
		definition: 'http://hl7.org/fhir/SearchParameter/TestReport-testscript',
		description: 'The test script executed to produce this report',
	},
};

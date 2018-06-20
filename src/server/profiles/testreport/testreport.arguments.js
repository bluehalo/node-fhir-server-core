/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#testreport',
		documentation: 'An external identifier for the test report',
	},
	ISSUED: {
		name: 'issued',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#testreport',
		documentation: 'The test report generation date',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#testreport',
		documentation: 'The reference to a participant in the test execution',
	},
	RESULT: {
		name: 'result',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#testreport',
		documentation: 'The result disposition of the test execution',
	},
	TESTER: {
		name: 'tester',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#testreport',
		documentation: 'The name of the testing organization',
	},
	TESTSCRIPT: {
		name: 'testscript',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#testreport',
		documentation: 'The test script executed to produce this report',
	},
};

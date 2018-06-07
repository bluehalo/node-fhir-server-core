/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The creation date',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The contents of the disposition message',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The business identifier',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The organization which generated this resource',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The processing outcome',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The EligibilityRequest reference',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The EligibilityRequest organization',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityresponse',
		documentation: 'The EligibilityRequest provider',
	},
};

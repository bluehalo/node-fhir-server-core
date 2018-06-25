/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#guidanceresponse',
		documentation: 'The identifier of the guidance response',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#guidanceresponse',
		documentation: 'The identity of a patient to search for guidance response results',
	},
	REQUEST: {
		name: 'request',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#guidanceresponse',
		documentation: 'The identifier of the request associated with the response',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#guidanceresponse',
		documentation: 'The subject that the guidance response is about',
	},
};

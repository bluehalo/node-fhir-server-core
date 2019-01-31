/**
 * @name exports
 * @static
 * @summary Arguments for the guidanceresponse query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'GuidanceResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-identifier',
		description: 'The identifier of the guidance response',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'GuidanceResponse.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-patient',
		description: 'The identity of a patient to search for guidance response results',
	},
	request: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'GuidanceResponse.requestIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-request',
		description: 'The identifier of the request associated with the response',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'GuidanceResponse.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-subject',
		description: 'The subject that the guidance response is about',
	},
};

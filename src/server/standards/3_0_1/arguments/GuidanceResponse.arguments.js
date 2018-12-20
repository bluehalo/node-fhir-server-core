module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-identifier',
		documentation: 'The identifier of the guidance response.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-patient',
		documentation: 'The identity of a patient to search for guidance response results.',
	},
	REQUEST: {
		name: 'request',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-request',
		documentation: 'The identifier of the request associated with the response.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-subject',
		documentation: 'The subject that the guidance response is about.',
	},
};

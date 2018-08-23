module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-identifier',
		description: 'The identifier of the guidance response.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-patient',
		description: 'The identity of a patient to search for guidance response results.',
	},
	REQUEST: {
		name: 'Request',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-request',
		description: 'The identifier of the request associated with the response.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/GuidanceResponse-subject',
		description: 'The subject that the guidance response is about.',
	},
};

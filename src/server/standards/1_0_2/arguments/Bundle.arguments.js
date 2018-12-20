module.exports = {
	COMPOSITION: {
		name: 'composition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-composition',
		documentation:
			"The first resource in the bundle, if the bundle type is 'document' - this is a composition, and this parameter provides access to searches its contents.",
	},
	MESSAGE: {
		name: 'message',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-message',
		documentation:
			"The first resource in the bundle, if the bundle type is 'message' - this is a message header, and this parameter provides access to search its contents.",
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-type',
		documentation:
			'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection.',
	},
};

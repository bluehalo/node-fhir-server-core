/**
 * @name exports
 * @static
 * @summary Arguments for the bundle query
 */
module.exports = {
	composition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Bundle.entry[0].resource',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-composition',
		description:
			"The first resource in the bundle, if the bundle type is 'document' - this is a composition, and this parameter provides access to search its contents",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Bundle.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-identifier',
		description: 'Persistent identifier for the bundle',
	},
	message: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Bundle.entry[0].resource',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-message',
		description:
			"The first resource in the bundle, if the bundle type is 'message' - this is a message header, and this parameter provides access to search its contents",
	},
	timestamp: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Bundle.timestamp',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-timestamp',
		description: 'When the bundle was assembled',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Bundle.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-type',
		description:
			'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection',
	},
};

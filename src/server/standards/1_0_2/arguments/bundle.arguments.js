/**
 * @name exports
 * @static
 * @summary Arguments for the bundle query
 */
module.exports = {
	composition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Bundle.entry.resource[0]',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-composition',
		description:
			"The first resource in the bundle, if the bundle type is 'document' - this is a composition, and this parameter provides access to searches its contents",
	},
	message: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Bundle.entry.resource[0]',
		definition: 'http://hl7.org/fhir/SearchParameter/Bundle-message',
		description:
			"The first resource in the bundle, if the bundle type is 'message' - this is a message header, and this parameter provides access to search its contents",
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

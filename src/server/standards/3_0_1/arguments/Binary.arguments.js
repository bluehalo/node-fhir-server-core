/**
 * @name exports
 * @static
 * @summary Arguments for the binary query
 */
module.exports = {
	contenttype: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Binary.contentType',
		definition: 'http://hl7.org/fhir/SearchParameter/Binary-contenttype',
		description: 'MimeType of the binary content',
	},
};

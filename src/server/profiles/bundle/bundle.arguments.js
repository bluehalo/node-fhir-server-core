/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	COMPOSITION: {
		name: 'composition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#bundle',
		documentation: 'The first resource in the bundle, if the bundle type is "document" - this is a composition, and this parameter provides access to searches its contents',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#bundle',
		documentation: 'Persistent identifier for the bundle',
	},
	MESSAGE: {
		name: 'message',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#bundle',
		documentation: 'The first resource in the bundle, if the bundle type is "message" - this is a message header, and this parameter provides access to search its contents',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#bundle',
		documentation: 'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection',
	},
};

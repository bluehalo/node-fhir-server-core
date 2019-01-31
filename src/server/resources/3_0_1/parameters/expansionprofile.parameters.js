/**
 * @name exports
 * @static
 * @summary Arguments for the expansionprofile query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ExpansionProfile.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-date',
		description: 'The expansion profile publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ExpansionProfile.description',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-description',
		description: 'The description of the expansion profile',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExpansionProfile.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-identifier',
		description: 'External identifier for the expansion profile',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExpansionProfile.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-jurisdiction',
		description: 'Intended jurisdiction for the expansion profile',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ExpansionProfile.name',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-name',
		description: 'Computationally friendly name of the expansion profile',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ExpansionProfile.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-publisher',
		description: 'Name of the publisher of the expansion profile',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExpansionProfile.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-status',
		description: 'The current status of the expansion profile',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'ExpansionProfile.url',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-url',
		description: 'The uri that identifies the expansion profile',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ExpansionProfile.version',
		definition: 'http://hl7.org/fhir/SearchParameter/ExpansionProfile-version',
		description: 'The business version of the expansion profile',
	},
};

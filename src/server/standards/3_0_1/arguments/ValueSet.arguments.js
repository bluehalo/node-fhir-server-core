module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-date',
		description: 'The value set publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-description',
		description: 'The description of the value set.',
	},
	EXPANSION: {
		name: 'Expansion',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-expansion',
		description: 'Uniquely identifies this expansion.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-identifier',
		description: 'External identifier for the value set.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction',
		description: 'Intended jurisdiction for the value set.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-name',
		description: 'Computationally friendly name of the value set.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-publisher',
		description: 'Name of the publisher of the value set.',
	},
	REFERENCE: {
		name: 'Reference',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-reference',
		description: 'A code system included or excluded in the value set or an imported value set.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-status',
		description: 'The current status of the value set.',
	},
	TITLE: {
		name: 'Title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-title',
		description: 'The human-friendly name of the value set.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-url',
		description: 'The uri that identifies the value set.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-version',
		description: 'The business version of the value set.',
	},
};

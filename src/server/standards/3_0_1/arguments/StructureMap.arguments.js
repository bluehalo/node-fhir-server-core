module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-date',
		description: 'The structure map publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-description',
		description: 'The description of the structure map.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-identifier',
		description: 'External identifier for the structure map.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-jurisdiction',
		description: 'Intended jurisdiction for the structure map.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-name',
		description: 'Computationally friendly name of the structure map.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-publisher',
		description: 'Name of the publisher of the structure map.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-status',
		description: 'The current status of the structure map.',
	},
	TITLE: {
		name: 'Title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-title',
		description: 'The human-friendly name of the structure map.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-url',
		description: 'The uri that identifies the structure map.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-version',
		description: 'The business version of the structure map.',
	},
};

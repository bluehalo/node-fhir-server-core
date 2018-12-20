module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-date',
		documentation: 'The structure map publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-description',
		documentation: 'The description of the structure map.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-identifier',
		documentation: 'External identifier for the structure map.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-jurisdiction',
		documentation: 'Intended jurisdiction for the structure map.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-name',
		documentation: 'Computationally friendly name of the structure map.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-publisher',
		documentation: 'Name of the publisher of the structure map.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-status',
		documentation: 'The current status of the structure map.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-title',
		documentation: 'The human-friendly name of the structure map.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-url',
		documentation: 'The uri that identifies the structure map.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-version',
		documentation: 'The business version of the structure map.',
	},
};

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-code',
		documentation: 'A code for the data element (server may choose to do subsumption).',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-date',
		documentation: 'The data element publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-description',
		documentation:
			'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-identifier',
		documentation: 'External identifier for the data element.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-jurisdiction',
		documentation: 'Intended jurisdiction for the data element.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-name',
		documentation: 'Computationally friendly name of the data element.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-publisher',
		documentation: 'Name of the publisher of the data element.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-status',
		documentation: 'The current status of the data element.',
	},
	STRINGENCY: {
		name: 'stringency',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-stringency',
		documentation: 'The stringency of the data element definition.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-title',
		documentation: 'The human-friendly name of the data element.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-url',
		documentation: 'The uri that identifies the data element.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-version',
		documentation: 'The business version of the data element.',
	},
	OBJECTCLASS: {
		name: 'objectClass',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClass',
		documentation: 'Matches on the 11179-objectClass extension value.',
	},
	OBJECTCLASSPROPERTY: {
		name: 'objectClassProperty',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClassProperty',
		documentation: 'Matches on the 11179-objectClassProperty extension value.',
	},
};

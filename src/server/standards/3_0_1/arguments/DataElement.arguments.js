/**
 * @name exports
 * @static
 * @summary Arguments for the dataelement query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.element.code',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-code',
		description: 'A code for the data element (server may choose to do subsumption)',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DataElement.date',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-date',
		description: 'The data element publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DataElement.element.definition',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-description',
		description:
			'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element.',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-identifier',
		description: 'External identifier for the data element',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-jurisdiction',
		description: 'Intended jurisdiction for the data element',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DataElement.name',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-name',
		description: 'Computationally friendly name of the data element',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DataElement.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-publisher',
		description: 'Name of the publisher of the data element',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-status',
		description: 'The current status of the data element',
	},
	stringency: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.stringency',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-stringency',
		description: 'The stringency of the data element definition',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DataElement.title',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-title',
		description: 'The human-friendly name of the data element',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'DataElement.url',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-url',
		description: 'The uri that identifies the data element',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.version',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-version',
		description: 'The business version of the data element',
	},
	objectClass: {
		type: 'token',
		fhirtype: 'token',
		xpath: "DataElement.element.mapping.extension[@url='http://hl7.org/fhir/StructureDefinition/11179-objectClass']",
		definition: 'http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClass',
		description: 'Matches on the 11179-objectClass extension value',
	},
	objectClassProperty: {
		type: 'token',
		fhirtype: 'token',
		xpath:
			"DataElement.element.mapping.extension[@url='http://hl7.org/fhir/StructureDefinition/11179-objectClassProperty']",
		definition: 'http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClassProperty',
		description: 'Matches on the 11179-objectClassProperty extension value',
	},
};

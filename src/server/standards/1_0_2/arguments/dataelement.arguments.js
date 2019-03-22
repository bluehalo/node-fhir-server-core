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
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DataElement.useContext',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-context',
		description: 'A use context assigned to the data element',
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
		description: 'The identifier of the data element',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DataElement.name',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-name',
		description: 'Name of the data element',
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
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'DataElement.url',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-url',
		description: 'The official URL for the data element',
	},
	version: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DataElement.version',
		definition: 'http://hl7.org/fhir/SearchParameter/DataElement-version',
		description: 'The version identifier of the data element',
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

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'A code for the data element (server may choose to do subsumption)',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'The data element publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'Text search in the description of the data element. This corresponds to the definition of the first DataElement.element.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'External identifier for the data element',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'Intended jurisdiction for the data element',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'Computationally friendly name of the data element',
	},
	OBJECTCLASS: {
		name: 'objectClass',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'Matches on the 11179-objectClass extension value',
	},
	OBJECTCLASSPROPERTY: {
		name: 'objectClassProperty',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'Matches on the 11179-objectClassProperty extension value',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'Name of the publisher of the data element',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'The current status of the data element',
	},
	STRINGENCY: {
		name: 'stringency',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'The stringency of the data element definition',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'The human-friendly name of the data element',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'The uri that identifies the data element',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#dataelement',
		documentation: 'The business version of the data element',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the structuremap query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'StructureMap.date',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-date',
		description: 'The structure map publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'StructureMap.description',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-description',
		description: 'The description of the structure map',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'StructureMap.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-identifier',
		description: 'External identifier for the structure map',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'StructureMap.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-jurisdiction',
		description: 'Intended jurisdiction for the structure map',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'StructureMap.name',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-name',
		description: 'Computationally friendly name of the structure map',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'StructureMap.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-publisher',
		description: 'Name of the publisher of the structure map',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'StructureMap.status',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-status',
		description: 'The current status of the structure map',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'StructureMap.title',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-title',
		description: 'The human-friendly name of the structure map',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'StructureMap.url',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-url',
		description: 'The uri that identifies the structure map',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'StructureMap.version',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureMap-version',
		description: 'The business version of the structure map',
	},
};

/**
 * @name exports
 * @static
 * @summary Arguments for the specimendefinition query
 */
module.exports = {
	container: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SpecimenDefinition.typeTested.container.type',
		definition: 'http://hl7.org/fhir/SearchParameter/SpecimenDefinition-container',
		description: 'The type of specimen conditioned in container expected by the lab',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SpecimenDefinition.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/SpecimenDefinition-identifier',
		description: 'The unique identifier associated with the specimen',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SpecimenDefinition.typeCollected',
		definition: 'http://hl7.org/fhir/SearchParameter/SpecimenDefinition-type',
		description: 'The type of collected specimen',
	},
};

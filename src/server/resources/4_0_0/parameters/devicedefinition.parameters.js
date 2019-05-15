/**
 * @name exports
 * @static
 * @summary Arguments for the devicedefinition query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DeviceDefinition.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceDefinition-identifier',
		description: 'The identifier of the component',
	},
	parent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceDefinition.parentDevice',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceDefinition-parent',
		description: 'The parent DeviceDefinition resource',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DeviceDefinition.type',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceDefinition-type',
		description: 'The device component type',
	},
};

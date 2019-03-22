/**
 * @name exports
 * @static
 * @summary Arguments for the devicecomponent query
 */
module.exports = {
	parent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceComponent.parent',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-parent',
		description: 'The parent DeviceComponent resource',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceComponent.source',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-source',
		description: 'The device source',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DeviceComponent.type',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-type',
		description: 'The device component type',
	},
};

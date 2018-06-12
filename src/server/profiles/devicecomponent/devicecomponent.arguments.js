/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicecomponent',
		documentation: 'The identifier of the component',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicecomponent',
		documentation: 'The parent DeviceComponent resource',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicecomponent',
		documentation: 'The device source',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicecomponent',
		documentation: 'The device component type',
	},
};

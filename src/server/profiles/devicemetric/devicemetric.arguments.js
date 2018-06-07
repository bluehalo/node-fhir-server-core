/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicemetric',
		documentation: 'The category of the metric',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicemetric',
		documentation: 'The identifier of the metric',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicemetric',
		documentation: 'The parent DeviceMetric resource',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicemetric',
		documentation: 'The device resource',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#devicemetric',
		documentation: 'The component type',
	},
};

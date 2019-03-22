/**
 * @name exports
 * @static
 * @summary Arguments for the devicemetric query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DeviceMetric.category',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-category',
		description: 'The category of the metric',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DeviceMetric.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier',
		description: 'The identifier of the metric',
	},
	parent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceMetric.parent',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-parent',
		description: 'The parent DeviceMetric resource',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceMetric.source',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-source',
		description: 'The device resource',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DeviceMetric.type',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-type',
		description: 'The component type',
	},
};

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-category',
		documentation: 'The category of the metric.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier',
		documentation: 'The identifier of the metric.',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-parent',
		documentation: 'The parent DeviceMetric resource.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-source',
		documentation: 'The device resource.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-type',
		documentation: 'The component type.',
	},
};

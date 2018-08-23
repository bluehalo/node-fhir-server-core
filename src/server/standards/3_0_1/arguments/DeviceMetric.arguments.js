module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-category',
		description: 'The category of the metric.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier',
		description: 'The identifier of the metric.',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-parent',
		description: 'The parent DeviceMetric resource.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-source',
		description: 'The device resource.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-type',
		description: 'The component type.',
	},
};

module.exports = {
	CATEGORY: {
		name: 'Category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-category',
		description: 'The category of the metric.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier',
		description: 'The identifier of the metric.',
	},
	PARENT: {
		name: 'Parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-parent',
		description: 'The parent DeviceMetric resource.',
	},
	SOURCE: {
		name: 'Source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-source',
		description: 'The device resource.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceMetric-type',
		description: 'The component type.',
	},
};

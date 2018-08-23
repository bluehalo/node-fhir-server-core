module.exports = {
	PARENT: {
		name: 'Parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-parent',
		description: 'The parent DeviceComponent resource.',
	},
	SOURCE: {
		name: 'Source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-source',
		description: 'The device source.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-type',
		description: 'The device component type.',
	},
};

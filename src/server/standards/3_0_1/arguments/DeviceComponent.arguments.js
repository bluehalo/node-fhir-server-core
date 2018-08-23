module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-identifier',
		description: 'The identifier of the component.',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-parent',
		description: 'The parent DeviceComponent resource.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-source',
		description: 'The device source.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-type',
		description: 'The device component type.',
	},
};

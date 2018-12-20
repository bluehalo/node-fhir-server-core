module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-identifier',
		documentation: 'The identifier of the component.',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-parent',
		documentation: 'The parent DeviceComponent resource.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-source',
		documentation: 'The device source.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceComponent-type',
		documentation: 'The device component type.',
	},
};

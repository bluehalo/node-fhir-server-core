module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-active',
		description: 'The Healthcare Service is currently marked as active.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-category',
		description: 'Service Category of the Healthcare Service.',
	},
	CHARACTERISTIC: {
		name: 'characteristic',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic',
		description: 'One of the HealthcareService\'s characteristics.',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint',
		description: 'Technical endpoints providing access to services operated for the location.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-identifier',
		description: 'External identifiers for this item.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-location',
		description: 'The location of the Healthcare Service.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-name',
		description: 'A portion of the Healthcare service name.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-organization',
		description: 'The organization that provides this Healthcare Service.',
	},
	PROGRAMNAME: {
		name: 'programname',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-programname',
		description: 'One of the Program Names serviced by this HealthcareService.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-type',
		description: 'The type of service provided by this healthcare service.',
	},
};

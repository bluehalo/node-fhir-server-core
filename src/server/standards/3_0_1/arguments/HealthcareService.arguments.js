module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-active',
		documentation: 'The Healthcare Service is currently marked as active.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-category',
		documentation: 'Service Category of the Healthcare Service.',
	},
	CHARACTERISTIC: {
		name: 'characteristic',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic',
		documentation: "One of the HealthcareService's characteristics.",
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint',
		documentation: 'Technical endpoints providing access to services operated for the location.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-identifier',
		documentation: 'External identifiers for this item.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-location',
		documentation: 'The location of the Healthcare Service.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-name',
		documentation: 'A portion of the Healthcare service name.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-organization',
		documentation: 'The organization that provides this Healthcare Service.',
	},
	PROGRAMNAME: {
		name: 'programname',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-programname',
		documentation: 'One of the Program Names serviced by this HealthcareService.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-type',
		documentation: 'The type of service provided by this healthcare service.',
	},
};

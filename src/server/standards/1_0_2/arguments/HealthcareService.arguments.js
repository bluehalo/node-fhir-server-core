module.exports = {
	CHARACTERISTIC: {
		name: 'Characteristic',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic',
		description: 'One of the HealthcareService\'s characteristics.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-identifier',
		description: 'External identifiers for this item.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-location',
		description: 'The location of the Healthcare Service.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-name',
		description: 'A portion of the Healthcare service name.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-organization',
		description: 'The organization that provides this Healthcare Service.',
	},
	PROGRAMNAME: {
		name: 'Programname',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-programname',
		description: 'One of the Program Names serviced by this HealthcareService.',
	},
	SERVICECATEGORY: {
		name: 'Servicecategory',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-servicecategory',
		description: 'Service Category of the Healthcare Service.',
	},
	SERVICETYPE: {
		name: 'Servicetype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-servicetype',
		description: 'The type of service provided by this healthcare service.',
	},
};

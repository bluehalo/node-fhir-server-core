/**
 * @name exports
 * @static
 * @summary Arguments for the healthcareservice query
 */
module.exports = {
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.active',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-active',
		description: 'The Healthcare Service is currently marked as active',
	},
	characteristic: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.characteristic',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic',
		description: "One of the HealthcareService's characteristics",
	},
	'coverage-area': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'HealthcareService.coverageArea',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-coverage-area',
		description: 'Location(s) service is intended for/available to',
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'HealthcareService.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint',
		description: 'Technical endpoints providing access to electronic services operated for the healthcare service',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-identifier',
		description: 'External identifiers for this item',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'HealthcareService.location',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-location',
		description: 'The location of the Healthcare Service',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'HealthcareService.name',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-name',
		description: 'A portion of the Healthcare service name',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'HealthcareService.providedBy',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-organization',
		description: 'The organization that provides this Healthcare Service',
	},
	program: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.program',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-program',
		description: 'One of the Programs supported by this HealthcareService',
	},
	'service-category': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.category',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-service-category',
		description: 'Service Category of the Healthcare Service',
	},
	'service-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.type',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-service-type',
		description: 'The type of service provided by this healthcare service',
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-specialty',
		description: 'The specialty of the service provided by this healthcare service',
	},
};

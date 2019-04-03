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
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.category',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-category',
		description: 'Service Category of the Healthcare Service',
	},
	characteristic: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.characteristic',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic',
		description: "One of the HealthcareService's characteristics",
	},
	endpoint: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'HealthcareService.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-endpoint',
		description: 'Technical endpoints providing access to services operated for the location',
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
	programname: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'HealthcareService.programName',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-programname',
		description: 'One of the Program Names serviced by this HealthcareService',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.type',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-type',
		description: 'The type of service provided by this healthcare service',
	},
};

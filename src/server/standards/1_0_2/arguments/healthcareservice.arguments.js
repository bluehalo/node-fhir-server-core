/**
 * @name exports
 * @static
 * @summary Arguments for the healthcareservice query
 */
module.exports = {
	characteristic: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.characteristic',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-characteristic',
		description: "One of the HealthcareService's characteristics",
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
		xpath: 'HealthcareService.serviceName',
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
	servicecategory: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.serviceCategory',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-servicecategory',
		description: 'Service Category of the Healthcare Service',
	},
	servicetype: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'HealthcareService.serviceType.type',
		definition: 'http://hl7.org/fhir/SearchParameter/HealthcareService-servicetype',
		description: 'The type of service provided by this healthcare service',
	},
};

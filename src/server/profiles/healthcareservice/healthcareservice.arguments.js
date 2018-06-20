/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'The Healthcare Service is currently marked as active',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'Service Category of the Healthcare Service',
	},
	CHARACTERISTIC: {
		name: 'characteristic',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'One of the HealthcareServices characteristics',
	},
	ENDPOINT: {
		name: 'endpoint',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'Technical endpoints providing access to services operated for the location',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'External identifiers for this item',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'The location of the Healthcare Service',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'A portion of the Healthcare service name',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'The organization that provides this Healthcare Service',
	},
	PROGRAMNAME: {
		name: 'programname',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'One of the Program Names serviced by this HealthcareService',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#healthcareservice',
		documentation: 'The type of service provided by this healthcare service',
	},
};

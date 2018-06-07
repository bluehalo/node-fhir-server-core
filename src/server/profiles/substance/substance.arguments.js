/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'The category of the substance',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'The code of the substance or ingredient',
	},
	CONTAINER_IDENTIFIER: {
		name: 'container-identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'Identifier of the package/container',
	},
	EXPIRY: {
		name: 'expiry',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'Expiry date of package or container of substance',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'Unique identifier for the substance',
	},
	QUANTITY: {
		name: 'quantity',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'Amount of substance in the package',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'active | inactive | entered-in-error',
	},
	SUBSTANCE_REFERENCE: {
		name: 'substance-reference',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#substance',
		documentation: 'A component of the substance',
	},
};

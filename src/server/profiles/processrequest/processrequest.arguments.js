/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTION: {
		name: 'action',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processrequest',
		documentation: 'The action requested by this resource',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processrequest',
		documentation: 'The business identifier of the ProcessRequest',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processrequest',
		documentation: 'The organization who generated this request',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#processrequest',
		documentation: 'The provider who regenerated this request',
	},
};

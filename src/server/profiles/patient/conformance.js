const { DSTU2 } = require('../../../constants');

/**
 * @name exports
 * @summary Patient conformance statement
 */

module.exports = {
	Profile: 'patient',
	Resource: (count) => ({
		extension: [{
			url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
			// This will be resolved dynamically by the service methods
			valueDecimal: count
		}],
		type: DSTU2.RESOURCE_TYPES.PATIENT,
		profile: {
			reference: 'http://hl7.org/fhir/Profile/Patient'
		},
		interaction: [{
			code: 'read'
		}, {
			code: 'search'
		}],
		searchParam: [ {
			name: '_content',
			type: 'string'
		}, {
			name: '_id',
			type: 'token'
		}, {
			name: '_lastUpdated',
			type: 'date'
		}, {
			name: '_profile',
			type: 'uri'
		}, {
			name: '_query',
			type: 'token'
		}, {
			name: '_security',
			type: 'token'
		}, {
			name: '_tag',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'active',
			type: 'token',
			documentation: 'Whether the patient record is active'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address',
			type: 'string',
			documentation: 'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-city',
			type: 'string',
			documentation: 'A city specified in an address'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-country',
			type: 'string',
			documentation: 'A country specified in an address'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-postalcode',
			type: 'string',
			documentation: 'A postalCode specified in an address'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-state',
			type: 'string',
			documentation: 'A state specified in an address'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-use',
			type: 'token',
			documentation: 'A use code specified in an address'
		}, {
			versions: [VERSIONS.STU3],
			name: 'animal-breed',
			type: 'token',
			documentation: 'The breed for animal patients'
		}, {
			versions: [VERSIONS.STU3],
			name: 'animal-species',
			type: 'token',
			documentation: 'The species for animal patients'
		}, {
			versions: [VERSIONS.STU3],
			name: 'birthdate',
			type: 'date',
			documentation: 'The patient\'s date of birth'
		}, {
			versions: [VERSIONS.STU3],
			name: 'death-date',
			type: 'date',
			documentation: 'The date of death has been provided and satisfies this search value'
		}, {
			versions: [VERSIONS.STU3],
			name: 'deceased',
			type: 'token',
			documentation: 'This patient has been marked as deceased, or as a death date entered'
		}, {
			versions: [VERSIONS.STU3],
			name: 'email',
			type: 'token',
			documentation: 'A value in an email contact'
		}, {
			versions: [VERSIONS.STU3],
			name: 'family',
			type: 'string',
			documentation: 'A portion of the family name of the patient'
		}, {
			versions: [VERSIONS.STU3],
			name: 'gender',
			type: 'token',
			documentation: 'Gender of the patient'
		}, {
			versions: [VERSIONS.STU3],
			name: 'general-practitioner',
			type: 'reference',
			documentation: 'Patient\'s nominated general practitioner, not the organization that manages the record'
		}, {
			versions: [VERSIONS.STU3],
			name: 'given',
			type: 'string',
			documentation: 'A portion of the given name of the patient'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token',
			documentation: 'A patient identifier'
		}, {
			versions: [VERSIONS.STU3],
			name: 'language',
			type: 'token',
			documentation: 'Language code (irrespective of use value)'
		}, {
			versions: [VERSIONS.STU3],
			name: 'link',
			type: 'reference',
			documentation: 'All patients linked to the given patient'
		}, {
			versions: [VERSIONS.STU3],
			name: 'name',
			type: 'string',
			documentation: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text'
		}, {
			versions: [VERSIONS.STU3],
			name: 'organization',
			type: 'reference',
			documentation: 'The organization at which this person is a patient'
		}, {
			versions: [VERSIONS.STU3],
			name: 'phone',
			type: 'token',
			documentation: 'A value in a phone contact'
		}, {
			versions: [VERSIONS.STU3],
			name: 'phonetic',
			type: 'string',
			documentation: 'A portion of either family or given name using some kind of phonetic matching algorithm'
		}, {
			versions: [VERSIONS.STU3],
			name: 'telecom',
			type: 'token',
			documentation: 'The value in any kind of telecom details of the patient'
		}]
	})
};

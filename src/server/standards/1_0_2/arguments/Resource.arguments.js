module.exports = {
	_CONTENT: {
		name: '_content',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-content',
		documentation: 'Search on the entire content of the resource.',
	},
	_ID: {
		name: '_id',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-id',
		documentation: 'Logical id of this artifact.',
	},
	_LASTUPDATED: {
		name: '_lastUpdated',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-lastUpdated',
		documentation: 'When the resource version last changed.',
	},
	_PROFILE: {
		name: '_profile',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-profile',
		documentation: 'Profiles this resource claims to conform to.',
	},
	_QUERY: {
		name: '_query',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-query',
		documentation: 'A custom search profile that describes a specific defined query operation.',
	},
	_SECURITY: {
		name: '_security',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-security',
		documentation: 'Security Labels applied to this resource.',
	},
	_TAG: {
		name: '_tag',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-tag',
		documentation: 'Tags applied to this resource.',
	},
	_TEXT: {
		name: '_text',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-text',
		documentation: 'Search on the narrative of the resource.',
	},
};

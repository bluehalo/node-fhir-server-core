/**
 * @name exports
 * @description Common express arguments used on many routes as route params
 */
module.exports.route_args = {
	BASE: {
		name: 'base_version',
		type: 'string',
		conformance_hide: true,
	},
	ID: {
		name: 'id',
		type: 'string',
		conformance_hide: true,
	},
	VERSION_ID: {
		name: 'version_id',
		type: 'string',
		conformance_hide: true,
	},
};

/**
 * @name search_args
 * @description Common arguments used for search
 */
module.exports.search_args = {
	_SORT: {
		name: '_sort',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_COUNT: {
		name: '_count',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_INCLUDE: {
		name: '_include',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_REVINCLUDE: {
		name: '_revinclude',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_SUMMARY: {
		name: '_summary',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_ELEMENTS: {
		name: '_elements',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
};

/**
 * @name exports
 * @description All the common arguments defined in one place
 */
module.exports.common_args = {
	_CONTENT: {
		name: '_content',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_FORMAT: {
		name: '_format',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/http.html#mime-type',
		documentation: undefined,
	},
	_FILTER: {
		name: '_filter',
		type: 'string',
		definition: 'http://hl7.org/fhir/search_filter.html',
		documentation: undefined
	},
	_ID: {
		name: '_id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_LASTUPDATED: {
		name: '_lastUpdated',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_PROFILE: {
		name: '_profile',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_QUERY: {
		name: '_query',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_SECURITY: {
		name: '_security',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
	_TAG: {
		name: '_tag',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined,
	},
};

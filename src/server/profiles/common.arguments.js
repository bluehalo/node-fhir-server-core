/**
* @name exports
* @description Common express arguments used on many routes as route params
*/
module.exports.route_args = {
	VERSION: {
		name: 'version',
		type: 'string',
		conformance_hide: true
	},
	ID: {
		name: 'id',
		type: 'string',
		conformance_hide: true
	},
	VERSION_ID: {
		name: 'version_id',
		type: 'string',
		conformance_hide: true
	}
};

/**
* @name exports
* @description Common arguments used for writing new reousrces
*/
module.exports.write_args = {
	RESOURCE_ID: {
		name: 'resource_id',
		type: 'string'
	},
	RESOURCE_BODY: {
		name: 'resource_body',
		type: 'json_string'
	}
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
		documentation: undefined
	},
	_FORMAT: {
		name: '_format',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/http.html#mime-type',
		documentation: undefined
	},
	_ID: {
		name: '_id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined
	},
	_LASTUPDATED: {
		name: '_lastUpdated',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined
	},
	_PROFILE: {
		name: '_profile',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined
	},
	_QUERY: {
		name: '_query',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined
	},
	_SECURITY: {
		name: '_security',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined
	},
	_TAG: {
		name: '_tag',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#resource',
		documentation: undefined
	}
};

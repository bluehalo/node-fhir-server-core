'use strict';

let KMS_INSTANCE = {
	__params: {},
	__error: undefined,
	__results: undefined,

	decrypt: (params, callback) => {
		KMS_INSTANCE.__params = params;
		callback(KMS_INSTANCE.__error, KMS_INSTANCE.__results);
	},

	__setError: function(err) {
		KMS_INSTANCE.__error = err;
	},

	__setResults: function(data) {
		KMS_INSTANCE.__results = data;
	},

	__reset: function() {
		KMS_INSTANCE.__params = {};
		KMS_INSTANCE.__error = undefined;
		KMS_INSTANCE.__results = undefined;
	},
};

let sdk = {
	__config: {},
	KMS: function(options) {
		sdk.__config = options;
		return KMS_INSTANCE;
	},
};

module.exports = sdk;

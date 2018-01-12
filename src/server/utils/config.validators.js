const path = require('path');

/**
 * @description Helper for validating SSL Config
 */
let validSSLConfiguration = (config = {}) => {
	// We should validate these can be loaded, not just are configured
	return config.key && config.cert;
};

/**
 * @description Helper for validating Adapters for profiles
 */
let loadProfile = (key, profile = {}) => {
	if (typeof profile.service === 'string') {
		try {
			profile.serviceModule = require(path.resolve(profile.service));
		} catch (err) {
			console.error(err);

			// Let's throw a more informative error than the default
			throw new Error(
				`Unable to load service for ${key} profile.`
				+ ` Check your configuration for the ${key} profile and`
				+ ' make sure the path is correct or pass the module in directly.'
			);
		}
	} else {
		profile.serviceModule = profile.service;
	}

	// @TODO Add profile specific validation to ensure the profile is conformant to the spec
	return profile.serviceModule;
};

/**
 * @description Helper for validating Adapters for profiles
 */
let loadAuthValidator = (key, auth = {}) => {

	if (typeof auth.service === 'string') {
		try {
			auth.serviceModule = require(path.resolve(auth.service));
		} catch (err) {
			console.error(err);
			// Let's throw a more informative error than the default
			throw new Error(
				`Unable to load service for ${key} service.`
				+ ` Check your configuration for the ${key} service and`
				+ ' make sure the path is correct or pass the module in directly.'
			);
		}
	} else {
		auth.serviceModule = auth.service;
	}



	return auth;
};


module.exports = {
	validSSLConfiguration,
	loadProfile,
	loadAuthValidator
};

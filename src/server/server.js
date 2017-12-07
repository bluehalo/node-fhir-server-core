const path = require('path');
const express = require(path.resolve('./src/lib/express'));
const Logger = require(path.resolve('./src/lib/winston'));

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
			profile.service = require(path.resolve(profile.service));
		} catch (err) {
			// Let's throw a more informative error than the default
			throw new Error(
				`Unable to load service for ${key} profile.`
				+ ` Check your configuration for the ${key} profile and`
				+ ' make sure the path is correct or pass the module in directly.'
			);
		}
	}
	return profile.service;
};



class Server {

	constructor (config) {
		// Validate the config has the required properties
		this.validate(config);
		// Store some of the properties
		this.config = config;
		this.logger = new Logger(config.logging);
	}

	/**
	 * @name validate
	 * @description Validate the config and provide defaults for some values
	 * @param {Object} config
	 */
	validate (config) {
		// Validate server settings
		let { server } = config;

		let hasValidServerConfiguration = (
			// We must have a port
			server.port &&
			// If the ssl config is present, it must have a key and cert
			(!server.ssl || validSSLConfiguration(server.ssl))
		);

		// Validate logger settings
		// These are not required, so if something is missing, we will set some sensible defaults
		if (!config.logging || !(config.logging && config.logging.level)) {
			// Add the default logging level but nothing else
			config.logging = Object.assign({}, config.logging, { level: 'error' });
		}

		// Validate profiles
		let profileKeys = Object.keys(config.profiles);
		let hasValidProfileConfiguration = profileKeys.some(profileKey => {
			return loadProfile(profileKey, config.profiles[profileKey]);
		});

		// Throw errors if any of these conditions have failed
		if (!hasValidServerConfiguration) {
			throw new Error(
				'Server configuration is invalid.'
				+ ' Please review the README.md section on Server Configuration.'
			);
		}

		if (!hasValidProfileConfiguration) {
			throw new Error(
				'No valid profile configurations found.'
				+ ' Please review the README.md section on Configuring Profiles.'
			);
		}
	}

	start () {
		this.logger.info('Starting your FHIR Server');

		return express.initialize({
			config: this.config,
			logger: this.logger
		}).then(app => {
			this.logger.info(`App listening on port: ${this.config.server.port}`);
			app.listen(this.config.server.port);
			return app;
		})
		.catch(err => {
			this.logger.error('Fatal error starting the application.', err);
			process.exit(err);
		});

	}

}

module.exports = Server;

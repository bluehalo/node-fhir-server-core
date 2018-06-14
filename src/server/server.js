const express = require('../lib/express');
const Logger = require('../lib/winston');

const {
	validSSLConfiguration,
	loadProfile,
	loadAuthValidator
} = require('./utils/config.validators');


class Server {

	/**
	 * Server object has a config and logger properties
	 * @param config
	 */
	constructor (config) {
		this.validate(config);
		this.config = config;
		this.logger = new Logger(config.logging);
	}


	/**
	 * @name validate
	 * @description Validate config and assign default values
	 * @param {Object} config
	 */
	validate (config) {

		// Validate server settings
		let { server } = config;
		let hasValidServerConfiguration = (
			// Must have server port and either not SSL or SSL with valid key and cert
			server.port && (!server.ssl || validSSLConfiguration(server.ssl))
		);

		// Validate logger settings
		// Assign default logging lever "error" if there's no logger setting
		if (!(config.logging && config.logging.level)) {
			config.logging = Object.assign({}, config.logging, { level: 'error' });
		}

		// Validate auth validator
		config.auth = loadAuthValidator('auth', config.auth);

		// Grab all profile keys
		let profileKeys = Object.keys(config.profiles);

		// Verify each profile has a service and that it can be loaded
		let profileHasServicesConfigured = profileKeys.every(profileKey => {
			return loadProfile(profileKey, config.profiles[profileKey]);
		});

		// Throw errors if any of these conditions have failed
		if (!hasValidServerConfiguration) {
			throw new Error(
				'Server configuration is invalid. Please review README.md section on Server Configuration.'
			);
		}

		// If no profile key, then no profile was set up, so server can't start.
		if (profileKeys.length === 0) {
			throw new Error(
				'No profiles configured. At least 1 profile must be configured.'
				+ ' Please review README.md section on Configuring Profiles.'
			);
		}

		// If services were not configured, data cannot be loaded.
		if (!profileHasServicesConfigured) {
			throw new Error(
				'No valid profile configurations found.'
				+ ' Please review README.md section on Configuring Profiles.'
			);
		}

	}

	start () {
		this.logger.info('Starting FHIR Server');

		return express.initialize({
			config: this.config,
			logger: this.logger
		}).then(app => {
			this.logger.info(`App listening on port: ${this.config.server.port}`);
			app.listen(this.config.server.port);
			// Save the app to the Server instance
			this.app = app;
			// Return this instance so the developer can access the logger, config, and express app
			return this;
		})
		.catch(err => {
			this.logger.error('Fatal error starting the application.', err);
			// Throw so this can be caught by the adapter
			throw err;
		});

	}

}

module.exports = Server;

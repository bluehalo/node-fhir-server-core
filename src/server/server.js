const express = require('../lib/express');
const Logger = require('../lib/winston');

const {
	validSSLConfiguration,
	loadProfile
} = require('./utils/config.validators');


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
		if (!(config.logging && config.logging.level)) {
			// Add the default logging level but nothing else
			config.logging = Object.assign({}, config.logging, { level: 'error' });
		}

		// Validate profiles for any spec provided
		let dstu2ProfileKeys = Object.keys(config.profiles.dstu2);
		let stu3ProfileKeys = Object.keys(config.profiles.stu3);

		let hasValidDSTU2ProfileConfiguration = dstu2ProfileKeys.every(profileKey => {
			return loadProfile(profileKey, config.profiles.dstu2[profileKey]);
		});

		let hasValidSTU3ProfileConfiguration = stu3ProfileKeys.every(profileKey => {
			return loadProfile(profileKey, config.profiles.stu3[profileKey]);
		});

		// Throw errors if any of these conditions have failed
		if (!hasValidServerConfiguration) {
			throw new Error(
				'Server configuration is invalid.'
				+ ' Please review the README.md section on Server Configuration.'
			);
		}

		if (dstu2ProfileKeys.length === 0 && stu3ProfileKeys.length === 0) {
			throw new Error(
				'No profiles configured. You must configure atleast 1 profile to run this server.'
				+ ' Please review the README.md section on Configuring Profiles.'
			);
		}

		// We can proceed if either of these are valid
		if (!(hasValidDSTU2ProfileConfiguration || hasValidSTU3ProfileConfiguration)) {
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

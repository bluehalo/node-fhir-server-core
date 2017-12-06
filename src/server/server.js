const path = require('path');
// const config = require(path.resolve('./src/config/config'));
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
let validProfile = (profile = {}) => {
	// Later we should require these and save them or save them if they
	// are already modules.
	return profile.adapter && profile.resolver;
};



class Server {

	constructor (config) {

		// Validate the config has the required properties
		this.validate(config);

		// Store some of the properties
		this.config = config;
		this.logger = new Logger(config.logger);

	}

	/**
	 * @name validate
	 * @description Validate the config and provide defaults for some values
	 * @param {Object} config
	 */
	validate (config) {
		// Validate server settings
		let { server } = config;
		let hasValidServerConfiguration = server.port && validSSLConfiguration(server.ssl);

		// Validate logger settings
		// These are not required, so if something is missing, we will set some sensible defaults
		if (!config.logger || (config.logger && config.logger.level)) {
			// Add the default logging level but nothing else
			config.logger = Object.assign({}, config.logger, { level: 'error' });
		}

		// Validate profiles
		let profileKeys = Object.keys(config.profiles);
		let hasValidProfileConfiguration = profileKeys.some(profileKey => {
			return validProfile(config.profiles[profileKey]);
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

		express.initialize({
			config: this.config,
			logger: this.logger
		}).then(app => {
			this.logger.info(`App listening on port: ${this.config.server.port}`);
			app.listen(this.config.server.port);
		})
		.catch(err => {
			this.logger.error('Fatal error starting the application.', err);
			process.exit(err);
		});

	}

}

module.exports = Server;

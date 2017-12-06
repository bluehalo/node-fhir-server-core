const Server = require('./server/server');

let mockConfig = {
	auth: {
		clientId: '',
		secret: '',
		issuer: {
			discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration'
		}
	},
	server: {
		port: 3000,
		sessionStore: null,
		ssl: {
			key: '',
			cert: ''
		}
	},
	logging: {
		level: 'debug'
	},
	profiles: {
		patient: {
			adapter: '', // Required as a string or module
			resolver: '' // Required as a string or module
		},
		observation: {
			adapter: '', // Required as a string or module
			resolver: '' // Required as a string or module
		}
	}
};

/**
 * @name exports
 * @description Export a function to generate a FHIR compatible server
 * @param {Object} config - FHIR Server configuration object
 */
module.exports = (config) => {
	// Create our FHIR server
	let server = new Server(config || mockConfig);
	// Start our server
	server.start();
};

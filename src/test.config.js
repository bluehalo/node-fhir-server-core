const FHIRServer = require('./index.js');
let { VERSIONS } = FHIRServer.constants;

module.exports = {
	server: {
		port: 3000,
		corsOptions: {
			maxAge: 86400,
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		},
		// ssl: {
		// 	key: './src/key.pem',
		// 	cert: './src/cert.pem'
		// }
	},
	logging: {
		level: 'debug',
	},
	// Security URLS for Capability Statement
	security: [
		{
			url: 'authorize',
			valueUri: 'https://afternoon-springs-39948.herokuapp.com/authorize',
		},
		{
			url: 'token',
			valueUri: 'https://afternoon-springs-39948.herokuapp.com/token',
		},
	],
	profiles: {
		Appointment: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		AppointmentResponse: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		Bundle: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		MedicationRequest: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		Observation: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		Patient: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']],
		},
		Questionnaire: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		QuestionnaireResponse: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
	},
};

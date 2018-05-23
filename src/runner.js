const {VERSIONS} = require('./constants');
const fhirServer = require('./index.js');

const CONFIG = {
	auth: {
		resourceServer: 'http://myserver.com',
		service: './src/server/utils/auth.validator.mock.js',
		protectedResourceClientId: 'client',
		protectedResourceClientSecret: 'secret',
		discoveryUrl: '',
		introspectionUrl: 'https://afternoon-springs-39948.herokuapp.com/introspect'
	},
	server: {
		port: 3000,
		corsOptions: {
			maxAge: 86400
		},
		// ssl: {
		// 	key: './src/key.pem',
		// 	cert: './src/cert.pem'
		// }
	},
	logging: {
		level: 'debug'
	},
	security: [
		{
			url: 'authorize',
			valueUri: 'https://afternoon-springs-39948.herokuapp.com/authorize'
		},
		{
			url: 'token',
			valueUri: 'https://afternoon-springs-39948.herokuapp.com/token'
		}
	],
	profiles: {
		// allergyintolerance: {
		// 	service: './src/server/profiles/allergyintolerance/allergyintolerance.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// careplan: {
		// 	service: './src/server/profiles/careplan/careplan.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// careteam: {
		// 	service: './src/server/profiles/careteam/careteam.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// condition: {
		// 	service: './src/server/profiles/condition/condition.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// device: {
		// 	service: './src/server/profiles/device/device.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// diagnosticreport: {
		// 	service: './src/server/profiles/diagnosticreport/diagnosticreport.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// goal: {
		// 	service: './src/server/profiles/goal/goal.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// immunization: {
		// 	service: './src/server/profiles/immunization/immunization.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// location: {
		// 	service: './src/server/profiles/location/location.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// medication: {
		// 	service: './src/server/profiles/medication/medication.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// medicationrequest: {
		// 	service: './src/server/profiles/medicationrequest/medicationrequest.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// medicationstatement: {
		// 	service: './src/server/profiles/medicationstatement/medicationstatement.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// observation: {
		// 	service: './src/server/profiles/observation/observation.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// organization: {
		// 	service: './src/server/profiles/organization/organization.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		patient: {
			service: './src/server/profiles/patient/patient.service.js',
			versions: [VERSIONS.STU3]
		},
		// practitioner: {
		// 	service: './src/server/profiles/practitioner/practitioner.service.js',
		// 	versions: [VERSIONS.STU3]
		// },
		// procedure: {
		// 	service: './src/server/profiles/procedure/procedure.service.js',
		// 	versions: [VERSIONS.STU3]
		// }
	}
};

let handler = promise => promise
	.then(data => [null, data])
	.catch(err => [err]);

let main = async function () {
	const [err, server] = await handler(fhirServer(CONFIG));
	// If something happened on initialization, handle it here
	if (err) {
		console.error(err.message);
		process.exit(1);
	} else {
		server.logger.info('FHIR Server started successfully');
	}
};

main();

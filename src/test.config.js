const FHIRServer = require('./index.js');
let { VERSIONS, RESOURCES } = FHIRServer.constants;

module.exports = {
	// Authentication setup
	auth: {
		resourceServer: 'http://localhost:3000',
		// strategy: {
		// 	name: 'bearer',
		// 	useSession: false,
		// 	service: '../server/strategies/bearer.strategy.js'
		// }
	},
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
	//
	// security: [
	// 	{
	// 		url: 'authorize',
	// 		valueUri: 'https://afternoon-springs-39948.herokuapp.com/authorize'
	// 	},
	// 	{
	// 		url: 'token',
	// 		valueUri: 'https://afternoon-springs-39948.herokuapp.com/token'
	// 	}
	// ],
	profiles: {
		[RESOURCES.ACCOUNT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ACTIVITYDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ADVERSEEVENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ALLERGYINTOLERANCE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.APPOINTMENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.APPOINTMENTRESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.AUDITEVENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.BASIC]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.BINARY]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.BODYSITE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.BUNDLE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CAPABILITYSTATEMENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CAREPLAN]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CARETEAM]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CHARGEITEM]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CLAIM]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CLAIMRESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CLINICALIMPRESSION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CODESYSTEM]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.COMMUNICATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.COMMUNICATIONREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.COMPARTMENTDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.COMPOSITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CONCEPTMAP]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CONDITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CONSENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.CONTRACT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.COVERAGE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DATAELEMENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DETECTEDISSUE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DEVICE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DEVICECOMPONENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DEVICEMETRIC]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DEVICEREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DEVICEUSESTATEMENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DIAGNOSTICREPORT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DOCUMENTMANIFEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.DOCUMENTREFERENCE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ELIGIBILITYREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ELIGIBILITYRESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ENCOUNTER]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ENDPOINT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ENROLLMENTREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ENROLLMENTRESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.EPISODEOFCARE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.EXPANSIONPROFILE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.EXPLANATIONOFBENEFIT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.FAMILYMEMBERHISTORY]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.FLAG]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.GOAL]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.GRAPHDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.GROUP]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.GUIDANCERESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.HEALTHCARESERVICE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.IMAGINGMANIFEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.IMAGINGSTUDY]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.IMMUNIZATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.IMMUNIZATIONRECOMMENDATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.IMPLEMENTATIONGUIDE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.LIBRARY]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.LINKAGE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.LIST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.LOCATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEASURE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEASUREREPORT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEDIA]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEDICATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEDICATIONADMINISTRATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEDICATIONDISPENSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEDICATIONREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MEDICATIONSTATEMENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MESSAGEDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.MESSAGEHEADER]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.NAMINGSYSTEM]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.NUTRITIONORDER]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.OBSERVATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.OPERATIONDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.ORGANIZATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PATIENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1'], VERSIONS['1_0_2']],
		},
		[RESOURCES.PAYMENTNOTICE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PAYMENTRECONCILIATION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PERSON]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PLANDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PRACTITIONER]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PRACTITIONERROLE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PROCEDURE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PROCEDUREREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PROCESSREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PROCESSRESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.PROVENANCE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.QUESTIONNAIRE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.QUESTIONNAIRERESPONSE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.REFERRALREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.RELATEDPERSON]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.REQUESTGROUP]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.RESEARCHSTUDY]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.RESEARCHSUBJECT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.RISKASSESSMENT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SCHEDULE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SEARCHPARAMETER]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SEQUENCE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SERVICEDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SLOT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SPECIMEN]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.STRUCTUREDEFINITION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.STRUCTUREMAP]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SUBSCRIPTION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SUBSTANCE]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SUPPLYDELIVERY]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.SUPPLYREQUEST]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.TASK]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.TESTREPORT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.TESTSCRIPT]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.VALUESET]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
		[RESOURCES.VISIONPRESCRIPTION]: {
			service: './src/server/profiles/service.mock.js',
			versions: [VERSIONS['3_0_1']],
		},
	},
};

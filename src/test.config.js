const FHIRServer = require('./index.js');
let { VERSIONS } = FHIRServer.constants;

module.exports = {
	// auth: {
	// 	strategy: {
	// 		name: 'bearer',
	// 		useSession: false,
	// 		service: '../server/strategies/bearer.strategy.js'
	// 	}
	// },
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
		// account: {
		// 	service: './src/server/profiles/account/account.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// activitydefinition: {
		// 	service: './src/server/profiles/activitydefinition/activitydefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// adverseevent: {
		// 	service: './src/server/profiles/adverseevent/adverseevent.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// allergyintolerance: {
		// 	service: './src/server/profiles/allergyintolerance/allergyintolerance.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// appointment: {
		// 	service: './src/server/profiles/appointment/appointment.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// appointmentresponse: {
		// 	service: './src/server/profiles/appointmentresponse/appointmentresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// auditevent: {
		// 	service: './src/server/profiles/auditevent/auditevent.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// basic: {
		// 	service: './src/server/profiles/basic/basic.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// binary: {
		// 	service: './src/server/profiles/binary/binary.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// bodysite: {
		// 	service: './src/server/profiles/bodysite/bodysite.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// bundle: {
		// 	service: './src/server/profiles/bundle/bundle.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// capabilitystatement: {
		// 	service: './src/server/profiles/capabilitystatement/capabilitystatement.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// careplan: {
		// 	service: './src/server/profiles/careplan/careplan.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// careteam: {
		// 	service: './src/server/profiles/careteam/careteam.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// chargeitem: {
		// 	service: './src/server/profiles/chargeitem/chargeitem.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// claim: {
		// 	service: './src/server/profiles/claim/claim.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// claimresponse: {
		// 	service: './src/server/profiles/claimresponse/claimresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// clinicalimpression: {
		// 	service: './src/server/profiles/clinicalimpression/clinicalimpression.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// codesystem: {
		// 	service: './src/server/profiles/codesystem/codesystem.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// communication: {
		// 	service: './src/server/profiles/communication/communication.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// communicationrequest: {
		// 	service: './src/server/profiles/communicationrequest/communicationrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// compartmentdefinition: {
		// 	service: './src/server/profiles/compartmentdefinition/compartmentdefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// composition: {
		// 	service: './src/server/profiles/composition/composition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// conceptmap: {
		// 	service: './src/server/profiles/conceptmap/conceptmap.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// condition: {
		// 	service: './src/server/profiles/condition/condition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// consent: {
		// 	service: './src/server/profiles/consent/consent.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// contract: {
		// 	service: './src/server/profiles/contract/contract.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// coverage: {
		// 	service: './src/server/profiles/coverage/coverage.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// dataelement: {
		// 	service: './src/server/profiles/dataelement/dataelement.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// detectedissue: {
		// 	service: './src/server/profiles/detectedissue/detectedissue.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// device: {
		// 	service: './src/server/profiles/device/device.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// devicecomponent: {
		// 	service: './src/server/profiles/devicecomponent/devicecomponent.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// devicemetric: {
		// 	service: './src/server/profiles/devicemetric/devicemetric.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// devicerequest: {
		// 	service: './src/server/profiles/devicerequest/devicerequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// deviceusestatement: {
		// 	service: './src/server/profiles/deviceusestatement/deviceusestatement.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// diagnosticreport: {
		// 	service: './src/server/profiles/diagnosticreport/diagnosticreport.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// documentmanifest: {
		// 	service: './src/server/profiles/documentmanifest/documentmanifest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// documentreference: {
		// 	service: './src/server/profiles/documentreference/documentreference.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// eligibilityrequest: {
		// 	service: './src/server/profiles/eligibilityrequest/eligibilityrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// eligibilityresponse: {
		// 	service: './src/server/profiles/eligibilityresponse/eligibilityresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// encounter: {
		// 	service: './src/server/profiles/encounter/encounter.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// endpoint: {
		// 	service: './src/server/profiles/endpoint/endpoint.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// enrollmentrequest: {
		// 	service: './src/server/profiles/enrollmentrequest/enrollmentrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// enrollmentresponse: {
		// 	service: './src/server/profiles/enrollmentresponse/enrollmentresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// episodeofcare: {
		// 	service: './src/server/profiles/episodeofcare/episodeofcare.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// expansionprofile: {
		// 	service: './src/server/profiles/expansionprofile/expansionprofile.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// explanationofbenefit: {
		// 	service: './src/server/profiles/explanationofbenefit/explanationofbenefit.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// familymemberhistory: {
		// 	service: './src/server/profiles/familymemberhistory/familymemberhistory.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// flag: {
		// 	service: './src/server/profiles/flag/flag.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// goal: {
		// 	service: './src/server/profiles/goal/goal.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// graphdefinition: {
		// 	service: './src/server/profiles/graphdefinition/graphdefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// group: {
		// 	service: './src/server/profiles/group/group.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// guidanceresponse: {
		// 	service: './src/server/profiles/guidanceresponse/guidanceresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// healthcareservice: {
		// 	service: './src/server/profiles/healthcareservice/healthcareservice.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// imagingmanifest: {
		// 	service: './src/server/profiles/imagingmanifest/imagingmanifest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// imagingstudy: {
		// 	service: './src/server/profiles/imagingstudy/imagingstudy.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// immunization: {
		// 	service: './src/server/profiles/immunization/immunization.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// immunizationrecommendation: {
		// 	service: './src/server/profiles/immunizationrecommendation/immunizationrecommendation.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// implementationguide: {
		// 	service: './src/server/profiles/implementationguide/implementationguide.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// library: {
		// 	service: './src/server/profiles/library/library.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// linkage: {
		// 	service: './src/server/profiles/linkage/linkage.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// list: {
		// 	service: './src/server/profiles/list/list.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// location: {
		// 	service: './src/server/profiles/location/location.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// measure: {
		// 	service: './src/server/profiles/measure/measure.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// measurereport: {
		// 	service: './src/server/profiles/measurereport/measurereport.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// media: {
		// 	service: './src/server/profiles/media/media.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// medication: {
		// 	service: './src/server/profiles/medication/medication.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// medicationadministration: {
		// 	service: './src/server/profiles/medicationadministration/medicationadministration.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// medicationdispense: {
		// 	service: './src/server/profiles/medicationdispense/medicationdispense.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// medicationrequest: {
		// 	service: './src/server/profiles/medicationrequest/medicationrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// medicationstatement: {
		// 	service: './src/server/profiles/medicationstatement/medicationstatement.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// messagedefinition: {
		// 	service: './src/server/profiles/messagedefinition/messagedefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// messageheader: {
		// 	service: './src/server/profiles/messageheader/messageheader.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// namingsystem: {
		// 	service: './src/server/profiles/namingsystem/namingsystem.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// nutritionorder: {
		// 	service: './src/server/profiles/nutritionorder/nutritionorder.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// observation: {
		// 	service: './src/server/profiles/observation/observation.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// operationdefinition: {
		// 	service: './src/server/profiles/operationdefinition/operationdefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		organization: {
			service: './src/server/profiles/service.mock.js',
			versions: [ VERSIONS['3_0_1'] ]
		},
		patient: {
			service: './src/server/profiles/service.mock.js',
			versions: [ VERSIONS['3_0_1'] ]
		},
		// paymentnotice: {
		// 	service: './src/server/profiles/paymentnotice/paymentnotice.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// paymentreconciliation: {
		// 	service: './src/server/profiles/paymentreconciliation/paymentreconciliation.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// person: {
		// 	service: './src/server/profiles/person/person.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// plandefinition: {
		// 	service: './src/server/profiles/plandefinition/plandefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// practitioner: {
		// 	service: './src/server/profiles/practitioner/practitioner.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// practitionerrole: {
		// 	service: './src/server/profiles/practitionerrole/practitionerrole.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// procedure: {
		// 	service: './src/server/profiles/procedure/procedure.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// procedurerequest: {
		// 	service: './src/server/profiles/procedurerequest/procedurerequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// processrequest: {
		// 	service: './src/server/profiles/processrequest/processrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// processresponse: {
		// 	service: './src/server/profiles/processresponse/processresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// provenance: {
		// 	service: './src/server/profiles/provenance/provenance.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// questionnaire: {
		// 	service: './src/server/profiles/questionnaire/questionnaire.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// questionnaireresponse: {
		// 	service: './src/server/profiles/questionnaireresponse/questionnaireresponse.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// referralrequest: {
		// 	service: './src/server/profiles/referralrequest/referralrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// relatedperson: {
		// 	service: './src/server/profiles/relatedperson/relatedperson.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// requestgroup: {
		// 	service: './src/server/profiles/requestgroup/requestgroup.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// researchstudy: {
		// 	service: './src/server/profiles/researchstudy/researchstudy.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// researchsubject: {
		// 	service: './src/server/profiles/researchsubject/researchsubject.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// riskassessment: {
		// 	service: './src/server/profiles/riskassessment/riskassessment.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// schedule: {
		// 	service: './src/server/profiles/schedule/schedule.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// searchparameter: {
		// 	service: './src/server/profiles/searchparameter/searchparameter.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// sequence: {
		// 	service: './src/server/profiles/sequence/sequence.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// servicedefinition: {
		// 	service: './src/server/profiles/servicedefinition/servicedefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// slot: {
		// 	service: './src/server/profiles/slot/slot.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// specimen: {
		// 	service: './src/server/profiles/specimen/specimen.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// structuredefinition: {
		// 	service: './src/server/profiles/structuredefinition/structuredefinition.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// structuremap: {
		// 	service: './src/server/profiles/structuremap/structuremap.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// subscription: {
		// 	service: './src/server/profiles/subscription/subscription.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// substance: {
		// 	service: './src/server/profiles/substance/substance.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// supplydelivery: {
		// 	service: './src/server/profiles/supplydelivery/supplydelivery.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// supplyrequest: {
		// 	service: './src/server/profiles/supplyrequest/supplyrequest.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// task: {
		// 	service: './src/server/profiles/task/task.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// testreport: {
		// 	service: './src/server/profiles/testreport/testreport.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// testscript: {
		// 	service: './src/server/profiles/testscript/testscript.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// valueset: {
		// 	service: './src/server/profiles/valueset/valueset.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// },
		// visionprescription: {
		// 	service: './src/server/profiles/visionprescription/visionprescription.service.js',
		// 	versions: [ VERSIONS['3_0_1'] ]
		// }
	}
};

exports.CONFIG_KEYS = {
	ACCOUNT: 'account',
	ACTIVITYDEFINITION: 'activitydefinition',
	ADVERSEEVENT: 'adverseevent',
	ALLERGYINTOLERANCE: 'allergyintolerance',
	APPOINTMENT: 'appointment',
	APPOINTMENTRESPONSE: 'appointmentresponse',
	AUDITEVENT: 'auditevent',
	BASIC: 'basic',
	BINARY: 'binary',
	BODYSITE: 'bodysite',
	BUNDLE: 'bundle',
	CAPABILITYSTATEMENT: 'capabilitystatement',
	CAREPLAN: 'careplan',
	CARETEAM: 'careteam',
	CHARGEITEM: 'chargeitem',
	CLAIM: 'claim',
	CLAIMRESPONSE: 'claimresponse',
	CLINICALIMPRESSION: 'clinicalimpression',
	CODESYSTEM: 'codesystem',
	COMMUNICATION: 'communication',
	COMMUNICATIONREQUEST: 'communicationrequest',
	COMPARTMENTDEFINITION: 'compartmentdefinition',
	COMPOSITION: 'composition',
	CONCEPTMAP: 'conceptmap',
	CONDITION: 'condition',
	CONSENT: 'consent',
	CONTRACT: 'contract',
	COVERAGE: 'coverage',
	DATAELEMENT: 'dataelement',
	DETECTEDISSUE: 'detectedissue',
	DEVICE: 'device',
	DEVICECOMPONENT: 'devicecomponent',
	DEVICEMETRIC: 'devicemetric',
	DEVICEREQUEST: 'devicerequest',
	DEVICEUSESTATEMENT: 'deviceusestatement',
	DIAGNOSTICREPORT: 'diagnosticreport',
	DOCUMENTMANIFEST: 'documentmanifest',
	DOCUMENTREFERENCE: 'documentreference',
	ELIGIBILITYREQUEST: 'eligibilityrequest',
	ELIGIBILITYRESPONSE: 'eligibilityresponse',
	ENCOUNTER: 'encounter',
	ENDPOINT: 'endpoint',
	ENROLLMENTREQUEST: 'enrollmentrequest',
	ENROLLMENTRESPONSE: 'enrollmentresponse',
	EPISODEOFCARE: 'episodeofcare',
	EXPANSIONPROFILE: 'expansionprofile',
	EXPLANATIONOFBENEFIT: 'explanationofbenefit',
	FAMILYMEMBERHISTORY: 'familymemberhistory',
	FLAG: 'flag',
	GOAL: 'goal',
	GRAPHDEFINITION: 'graphdefinition',
	GROUP: 'group',
	GUIDANCERESPONSE: 'guidanceresponse',
	HEALTHCARESERVICE: 'healthcareservice',
	IMAGINGMANIFEST: 'imagingmanifest',
	IMAGINGSTUDY: 'imagingstudy',
	IMMUNIZATION: 'immunization',
	IMMUNIZATIONRECOMMENDATION: 'immunizationrecommendation',
	IMPLEMENTATIONGUIDE: 'implementationguide',
	LIBRARY: 'library',
	LINKAGE: 'linkage',
	LIST: 'list',
	LOCATION: 'location',
	MEASURE: 'measure',
	MEASUREREPORT: 'measurereport',
	MEDIA: 'media',
	MEDICATION: 'medication',
	MEDICATIONADMINISTRATION: 'medicationadministration',
	MEDICATIONDISPENSE: 'medicationdispense',
	MEDICATIONREQUEST: 'medicationrequest',
	MEDICATIONSTATEMENT: 'medicationstatement',
	MESSAGEDEFINITION: 'messagedefinition',
	MESSAGEHEADER: 'messageheader',
	NAMINGSYSTEM: 'namingsystem',
	NUTRITIONORDER: 'nutritionorder',
	OBSERVATION: 'observation',
	OPERATIONDEFINITION: 'operationdefinition',
	ORGANIZATION: 'organization',
	PATIENT: 'patient',
	PAYMENTNOTICE: 'paymentnotice',
	PAYMENTRECONCILIATION: 'paymentreconciliation',
	PERSON: 'person',
	PLANDEFINITION: 'plandefinition',
	PRACTITIONER: 'practitioner',
	PRACTITIONERROLE: 'practitionerrole',
	PROCEDURE: 'procedure',
	PROCEDUREREQUEST: 'procedurerequest',
	PROCESSREQUEST: 'processrequest',
	PROCESSRESPONSE: 'processresponse',
	PROVENANCE: 'provenance',
	QUESTIONNAIRE: 'questionnaire',
	QUESTIONNAIRERESPONSE: 'questionnaireresponse',
	REFERRALREQUEST: 'referralrequest',
	RELATEDPERSON: 'relatedperson',
	REQUESTGROUP: 'requestgroup',
	RESEARCHSTUDY: 'researchstudy',
	RESEARCHSUBJECT: 'researchsubject',
	RISKASSESSMENT: 'riskassessment',
	SCHEDULE: 'schedule',
	SEARCHPARAMETER: 'searchparameter',
	SEQUENCE: 'sequence',
	SERVICEDEFINITION: 'servicedefinition',
	SLOT: 'slot',
	SPECIMEN: 'specimen',
	STRUCTUREDEFINITION: 'structuredefinition',
	STRUCTUREMAP: 'structuremap',
	SUBSCRIPTION: 'subscription',
	SUBSTANCE: 'substance',
	SUPPLYDELIVERY: 'supplydelivery',
	SUPPLYREQUEST: 'supplyrequest',
	TASK: 'task',
	TESTREPORT: 'testreport',
	TESTSCRIPT: 'testscript',
	VALUESET: 'valueset',
	VISIONPRESCRIPTION: 'visionprescription',
	// OBSERVATIONRESULTS: 'observationresults',
	// OBSERVATIONSMOKINGSTATUS: 'observationsmokingstatus',
	// OBSERVATIONVITALSIGNS: 'observationvitalsigns',
};

exports.ISSUE = {
	SEVERITY: {
		FATAL: 'fatal',
		ERROR: 'error',
		WARNING: 'warning',
		INFO: 'information'
	},
	// Codes defined here: https://www.hl7.org/fhir/valueset-issue-type.html
	CODE: {
		// Invalid can be seen as a parent essentially to these, see Level on above url
		// This means structure, required, value, and invariant, are all also invalid
		// you can send invalid back or something more specific
		INVALID: 'invalid',
		STRUCTURE: 'structure',
		REQUIRED: 'required',
		VALUE: 'value',
		INVARIANT: 'invariant',
		// Security is parent of login, unknown, expired, forbidden, and surpressed
		SECURITY: 'security',
		LOGIN: 'login',
		UNKNOWN: 'unknown',
		EXPIRED: 'expired',
		FORBIDDEN: 'forbidden',
		SUPPRESSED: 'surpressed',
		// Procesing has no parent/children
		PROCESSING: 'processing',
		// Not Supported is parent of duplicate, not found, and too long
		NOT_SUPPORTED: 'not-supported',
		DUPLICATE: 'duplicate',
		NOT_FOUND: 'not-found',
		TOO_LONG: 'too-long',
		// Code invalid is parent of extension, too costly, business rule, conflict, and incomplete
		CODE_INVALID: 'code-invalid',
		EXTENSION: 'extension',
		TOO_COSTLY: 'too-costly',
		BUSINESS_RULE: 'business-rule',
		CONFLICT: 'conflict',
		INCOMPLETE: 'incomplete',
		// Transient is parent of lock error, no store, exception, timeout, and throttled
		TRANSIENT: 'transient',
		LOCK_ERROR: 'lock-error',
		NO_STORE: 'no-store',
		EXCEPTION: 'exception',
		TIMEOUT: 'timeout',
		THROTTLED: 'throttled',
		// Informational has no parent/children
		INFORMATIONAL: 'informational'
	}
};

/**
* Interactions Types.  Also the name of the controller methods
*/
exports.INTERACTIONS = {
	SEARCH: 'search',
	SEARCH_BY_ID: 'searchById',
	SEARCH_BY_VID: 'searchByVersionId',
	HISTORY: 'history',
	HISTORY_BY_ID: 'historyById',
	CREATE: 'create',
	UPDATE: 'update',
	DELETE: 'remove'
};

/**
* These are currently the only versions we support
*/
exports.VERSIONS = {
	'3_0_1': '3_0_1'
};

/**
* Custom events we support
*/
exports.EVENTS = {
	AUDIT: 'audit-event',
	PROVENANCE: 'provenance'
};

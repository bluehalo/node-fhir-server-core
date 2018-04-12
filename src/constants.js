exports.DSTU2 = {
	RESOURCE_TYPES: {
		OPERATIONOUTCOME: 'OperationOutcome',
		CONFORMANCE: 'Conformance',
		ALLERGYINTOLERANCE: 'AllergyIntolerance',
		CAREPLAN: 'CarePlan',
		CARETEAM: 'CareTeam',
		CONDITION: 'Condition',
		DEVICE: 'Device',
		DIAGNOSTICREPORT: 'DiagnosticReport',
		GOAL: 'Goal',
		IMMUNIZATION: 'Immunization',
		LOCATION: 'Location',
		MEDICATION: 'Medication',
		MEDICATIONREQUEST: 'MedicationRequest',
		MEDICATIONSTATEMENT: 'MedicationStatement',
		OBSERVATION: 'Observation',
		ORGANIZATION: 'Organization',
		PATIENT: 'Patient',
		PRACTITIONER: 'Practitioner',
		RESULTS: 'Results',
		SMOKINGSTATUS: 'SmokingStatus'
	},
	STATUSES: {
		DRAFT: 'draft',
		ACTIVE: 'active',
		RETIRED: 'retired'
	},
	MODE: {
		CONFIDENTIAL: 'confidential',
		PUBLIC: 'public'
	}
};

exports.STU3 = {
	RESOURCE_TYPES: {
		OPERATIONOUTCOME: 'OperationOutcome',
		CONFORMANCE: 'CapabilityStatement',
		ALLERGYINTOLERANCE: 'AllergyIntolerance',
		CAREPLAN: 'CarePlan',
		CARETEAM: 'CareTeam',
		CONDITION: 'Condition',
		DEVICE: 'Device',
		DIAGNOSTICREPORT: 'DiagnosticReport',
		GOAL: 'Goal',
		IMMUNIZATION: 'Immunization',
		LOCATION: 'Location',
		MEDICATION: 'Medication',
		MEDICATIONREQUEST: 'MedicationRequest',
		MEDICATIONSTATEMENT: 'MedicationStatement',
		OBSERVATION: 'Observation',
		ORGANIZATION: 'Organization',
		PATIENT: 'Patient',
		PRACTITIONER: 'Practitioner',
		RESULTS: 'Results',
		SMOKINGSTATUS: 'SmokingStatus'
	},
	STATUSES: {
		DRAFT: 'draft',
		ACTIVE: 'active',
		RETIRED: 'retired'
	},
	MODE: {
		CONFIDENTIAL: 'confidential',
		PUBLIC: 'public'
	}
};

exports.CONFIG_KEYS = {
	OBSERVATION: 'observation',
	PATIENT: 'patient',
	PRACTITIONER: 'practitioner',
	OAUTH: 'oauth'
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

exports.VERSIONS = {
	DSTU2: 'dstu2',
	STU3: 'stu3'
};

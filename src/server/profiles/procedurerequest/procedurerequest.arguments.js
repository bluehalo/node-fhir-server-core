/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Date request signed',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'What request fulfills',
	},
	BODY_SITE: {
		name: 'body-site',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Where procedure is going to be done',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'What is being requested/ordered',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Encounter or Episode during which request was created',
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Protocol or definition',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'An encounter in which this request is made',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Identifiers assigned to this order',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'proposal | plan | order +',
	},
	OCCURRENCE: {
		name: 'occurrence',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'When procedure should occur',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Search by subject - a patient',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Requested perfomer',
	},
	PERFORMER_TYPE: {
		name: 'performer-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Performer role',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'routine | urgent | asap | stat',
	},
	REPLACES: {
		name: 'replaces',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'What request replaces',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Individual making the request',
	},
	REQUISITION: {
		name: 'requisition',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Composite Request ID',
	},
	SPECIMEN: {
		name: 'specimen',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Specimen to be tested',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'draft | active | suspended | completed | entered-in-error | cancelled',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedurerequest',
		documentation: 'Search by subject',
	},
};

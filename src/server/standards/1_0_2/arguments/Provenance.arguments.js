module.exports = {
	AGENT: {
		name: 'agent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent',
		documentation: 'Individual, device or organization playing role.',
	},
	END: {
		name: 'end',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-end',
		documentation: 'End time with inclusive boundary, if not ongoing.',
	},
	ENTITY: {
		name: 'entity',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity',
		documentation: 'Identity of entity.',
	},
	ENTITYTYPE: {
		name: 'entitytype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entitytype',
		documentation: 'The type of resource in this entity.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-location',
		documentation: 'Where the activity occurred, if relevant.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-patient',
		documentation: 'Target Reference(s) (usually version specific).',
	},
	SIGTYPE: {
		name: 'sigtype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-sigtype',
		documentation: 'Indication of the reason the entity signed the object(s).',
	},
	START: {
		name: 'start',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-start',
		documentation: 'Starting time with inclusive boundary.',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-target',
		documentation: 'Target Reference(s) (usually version specific).',
	},
	USERID: {
		name: 'userid',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-userid',
		documentation: 'Authorization-system identifier for the agent.',
	},
};

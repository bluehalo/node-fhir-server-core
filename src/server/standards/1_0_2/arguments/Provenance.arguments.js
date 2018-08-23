module.exports = {
	AGENT: {
		name: 'Agent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent',
		description: 'Individual, device or organization playing role.',
	},
	END: {
		name: 'End',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-end',
		description: 'End time with inclusive boundary, if not ongoing.',
	},
	ENTITY: {
		name: 'Entity',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity',
		description: 'Identity of entity.',
	},
	ENTITYTYPE: {
		name: 'Entitytype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entitytype',
		description: 'The type of resource in this entity.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-location',
		description: 'Where the activity occurred, if relevant.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-patient',
		description: 'Target Reference(s) (usually version specific).',
	},
	SIGTYPE: {
		name: 'Sigtype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-sigtype',
		description: 'Indication of the reason the entity signed the object(s).',
	},
	START: {
		name: 'Start',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-start',
		description: 'Starting time with inclusive boundary.',
	},
	TARGET: {
		name: 'Target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-target',
		description: 'Target Reference(s) (usually version specific).',
	},
	USERID: {
		name: 'Userid',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-userid',
		description: 'Authorization-system identifier for the agent.',
	},
};

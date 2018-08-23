module.exports = {
	AGENT: {
		name: 'agent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent',
		description: 'Who participated.',
	},
	AGENT_ROLE: {
		name: 'agent-role',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent-role',
		description: 'What the agents role was.',
	},
	END: {
		name: 'end',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-end',
		description: 'End time with inclusive boundary, if not ongoing.',
	},
	ENTITY_ID: {
		name: 'entity-id',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity-id',
		description: 'Identity of entity.',
	},
	ENTITY_REF: {
		name: 'entity-ref',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity-ref',
		description: 'Identity of entity.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-location',
		description: 'Where the activity occurred, if relevant.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-patient',
		description: 'Target Reference(s) (usually version specific).',
	},
	RECORDED: {
		name: 'recorded',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-recorded',
		description: 'When the activity was recorded / updated.',
	},
	SIGNATURE_TYPE: {
		name: 'signature-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-signature-type',
		description: 'Indication of the reason the entity signed the object(s).',
	},
	START: {
		name: 'start',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-start',
		description: 'Starting time with inclusive boundary.',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-target',
		description: 'Target Reference(s) (usually version specific).',
	},
};

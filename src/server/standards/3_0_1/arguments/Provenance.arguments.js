module.exports = {
	AGENT: {
		name: 'Agent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent',
		description: 'Who participated.',
	},
	AGENT_ROLE: {
		name: 'Agent_role',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent-role',
		description: 'What the agents role was.',
	},
	END: {
		name: 'End',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-end',
		description: 'End time with inclusive boundary, if not ongoing.',
	},
	ENTITY_ID: {
		name: 'Entity_id',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity-id',
		description: 'Identity of entity.',
	},
	ENTITY_REF: {
		name: 'Entity_ref',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity-ref',
		description: 'Identity of entity.',
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
	RECORDED: {
		name: 'Recorded',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-recorded',
		description: 'When the activity was recorded / updated.',
	},
	SIGNATURE_TYPE: {
		name: 'Signature_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-signature-type',
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
};

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AGENT: {
		name: 'agent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Who participated',
	},
	AGENT_ROLE: {
		name: 'agent-role',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'What the agents role was',
	},
	END: {
		name: 'end',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'End time with inclusive boundary, if not ongoing',
	},
	ENTITY_ID: {
		name: 'entity-id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Identity of entity',
	},
	ENTITY_REF: {
		name: 'entity-ref',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Identity of entity',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Where the activity occurred, if relevant',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Target Reference(s) (usually version specific)',
	},
	RECORDED: {
		name: 'recorded',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'When the activity was recorded / updated',
	},
	SIGNATURE_TYPE: {
		name: 'signature-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Indication of the reason the entity signed the object(s)',
	},
	START: {
		name: 'start',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Starting time with inclusive boundary',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#provenance',
		documentation: 'Target Reference(s) (usually version specific)',
	},
};

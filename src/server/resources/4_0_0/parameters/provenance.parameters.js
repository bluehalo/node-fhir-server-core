/**
 * @name exports
 * @static
 * @summary Arguments for the provenance query
 */
module.exports = {
	agent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.agent.who',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent',
		description: 'Who participated',
	},
	'agent-role': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.agent.role',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent-role',
		description: 'What the agents role was',
	},
	'agent-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.agent.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent-type',
		description: 'How the agent participated',
	},
	entity: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.entity.what',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity',
		description: 'Identity of entity',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.location',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-location',
		description: 'Where the activity occurred, if relevant',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.target',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-patient',
		description: 'Target Reference(s) (usually version specific)',
	},
	recorded: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Provenance.recorded',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-recorded',
		description: 'When the activity was recorded / updated',
	},
	'signature-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.signature.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-signature-type',
		description: 'Indication of the reason the entity signed the object(s)',
	},
	target: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.target',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-target',
		description: 'Target Reference(s) (usually version specific)',
	},
	when: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Provenance.occurredDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-when',
		description: 'When the activity occurred',
	},
};

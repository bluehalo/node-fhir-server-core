/**
 * @name exports
 * @static
 * @summary Arguments for the provenance query
 */
module.exports = {
	agent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.agent.whoUri',
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
	end: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Provenance.period.end',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-end',
		description: 'End time with inclusive boundary, if not ongoing',
	},
	'entity-id': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.entity.whatIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity-id',
		description: 'Identity of entity',
	},
	'entity-ref': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.entity.whatReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity-ref',
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
	start: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Provenance.period.start',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-start',
		description: 'Starting time with inclusive boundary',
	},
	target: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.target',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-target',
		description: 'Target Reference(s) (usually version specific)',
	},
};

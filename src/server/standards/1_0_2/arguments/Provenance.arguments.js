/**
 * @name exports
 * @static
 * @summary Arguments for the provenance query
 */
module.exports = {
	agent: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Provenance.agent.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-agent',
		description: 'Individual, device or organization playing role',
	},
	end: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Provenance.period.end',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-end',
		description: 'End time with inclusive boundary, if not ongoing',
	},
	entity: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Provenance.entity.reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entity',
		description: 'Identity of entity',
	},
	entitytype: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.entity.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-entitytype',
		description: 'The type of resource in this entity',
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
	sigtype: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.signature.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-sigtype',
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
	userid: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Provenance.agent.userId',
		definition: 'http://hl7.org/fhir/SearchParameter/Provenance-userid',
		description: 'Authorization-system identifier for the agent',
	},
};

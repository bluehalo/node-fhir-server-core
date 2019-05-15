/**
 * @name exports
 * @static
 * @summary Arguments for the namingsystem query
 */
module.exports = {
	contact: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'NamingSystem.contact.name',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-contact',
		description: 'Name of a individual to contact',
	},
	context: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NamingSystem.useContext',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-context',
		description: 'Content intends to support these contexts',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'NamingSystem.date',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-date',
		description: 'Publication Date(/time)',
	},
	'id-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NamingSystem.uniqueId.type',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-id-type',
		description: 'oid | uuid | uri | other',
	},
	kind: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NamingSystem.kind',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-kind',
		description: 'codesystem | identifier | root',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'NamingSystem.name',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-name',
		description: 'Human-readable label',
	},
	period: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'NamingSystem.uniqueId.period',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-period',
		description: 'When is identifier valid?',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'NamingSystem.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-publisher',
		description: 'Name of the publisher (Organization or individual)',
	},
	'replaced-by': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'NamingSystem.replacedBy',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-replaced-by',
		description: 'Use this instead',
	},
	responsible: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'NamingSystem.responsible',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-responsible',
		description: 'Who maintains system namespace?',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NamingSystem.status',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-status',
		description: 'draft | active | retired',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NamingSystem.contact.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-telecom',
		description: 'Contact details for individual or publisher',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NamingSystem.type',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-type',
		description: 'e.g. driver,  provider,  patient, bank etc.',
	},
	value: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'NamingSystem.uniqueId.value',
		definition: 'http://hl7.org/fhir/SearchParameter/NamingSystem-value',
		description: 'The unique identifier',
	},
};

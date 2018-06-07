/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTION: {
		name: 'action',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Type of action performed during the event',
	},
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Identifier for the network access point of the user device',
	},
	AGENT: {
		name: 'agent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Direct reference to resource',
	},
	AGENT_NAME: {
		name: 'agent-name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Human-meaningful name for the agent',
	},
	AGENT_ROLE: {
		name: 'agent-role',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Agent role in the event',
	},
	ALTID: {
		name: 'altid',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Alternative User id e.g. authentication',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Time when the event occurred on source',
	},
	ENTITY: {
		name: 'entity',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Specific instance of resource',
	},
	ENTITY_ID: {
		name: 'entity-id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Specific instance of object',
	},
	ENTITY_NAME: {
		name: 'entity-name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Descriptor for entity',
	},
	ENTITY_ROLE: {
		name: 'entity-role',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'What role the entity played',
	},
	ENTITY_TYPE: {
		name: 'entity-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Type of entity involved',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Whether the event succeeded or failed',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Direct reference to resource',
	},
	POLICY: {
		name: 'policy',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Policy that authorized event',
	},
	SITE: {
		name: 'site',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Logical source location within the enterprise',
	},
	SOURCE: {
		name: 'source',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'The identity of source detecting the event',
	},
	SUBTYPE: {
		name: 'subtype',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'More specific type/id for the event',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Type/identifier of event',
	},
	USER: {
		name: 'user',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#auditevent',
		documentation: 'Unique identifier for the user',
	},
};

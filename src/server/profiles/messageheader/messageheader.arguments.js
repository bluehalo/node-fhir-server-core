/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'The source of the decision',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'ok | transient-error | fatal-error',
	},
	DESTINATION: {
		name: 'destination',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Name of system',
	},
	DESTINATION_URI: {
		name: 'destination-uri',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Actual destination address or id',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'The source of the data entry',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Code for the event this message represents',
	},
	FOCUS: {
		name: 'focus',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'The actual content of the message',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Intended "real-world" recipient for the data',
	},
	RESPONSE_ID: {
		name: 'response-id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Id of original message',
	},
	RESPONSIBLE: {
		name: 'responsible',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Final responsibility for event',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Real world sender of the message',
	},
	SOURCE: {
		name: 'source',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Name of system',
	},
	SOURCE_URI: {
		name: 'source-uri',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Actual message source address or id',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Particular delivery destination within the destination',
	},
	TIMESTAMP: {
		name: 'timestamp',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#messageheader',
		documentation: 'Time that the message was sent',
	},
};

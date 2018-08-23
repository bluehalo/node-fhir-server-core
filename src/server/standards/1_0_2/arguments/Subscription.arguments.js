module.exports = {
	CONTACT: {
		name: 'Contact',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-contact',
		description: 'Contact details for source (e.g. troubleshooting).',
	},
	CRITERIA: {
		name: 'Criteria',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-criteria',
		description: 'Rule for server push criteria.',
	},
	PAYLOAD: {
		name: 'Payload',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-payload',
		description: 'Mimetype to send, or blank for no payload.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-status',
		description: 'requested | active | error | off.',
	},
	TAG: {
		name: 'Tag',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-tag',
		description: 'A tag to add to matching resources.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-type',
		description: 'rest-hook | websocket | email | sms | message.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-url',
		description: 'Where the channel points to.',
	},
};

module.exports = {
	CONTACT: {
		name: 'contact',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-contact',
		description: 'Contact details for source (e.g. troubleshooting).',
	},
	CRITERIA: {
		name: 'criteria',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-criteria',
		description: 'Rule for server push criteria.',
	},
	PAYLOAD: {
		name: 'payload',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-payload',
		description: 'Mimetype to send, or blank for no payload.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-status',
		description: 'requested | active | error | off.',
	},
	TAG: {
		name: 'tag',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-tag',
		description: 'A tag to add to matching resources.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-type',
		description: 'rest-hook | websocket | email | sms | message.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-url',
		description: 'Where the channel points to.',
	},
};

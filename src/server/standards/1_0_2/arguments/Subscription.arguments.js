/**
 * @name exports
 * @static
 * @summary Arguments for the subscription query
 */
module.exports = {
	contact: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.contact',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-contact',
		description: 'Contact details for source (e.g. troubleshooting)',
	},
	criteria: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Subscription.criteria',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-criteria',
		description: 'Rule for server push criteria',
	},
	payload: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Subscription.channel.payload',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-payload',
		description: 'Mimetype to send, or blank for no payload',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-status',
		description: 'requested | active | error | off',
	},
	tag: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.tag',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-tag',
		description: 'A tag to add to matching resources',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.channel.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-type',
		description: 'rest-hook | websocket | email | sms | message',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Subscription.channel.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-url',
		description: 'Where the channel points to',
	},
};

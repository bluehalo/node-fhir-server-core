/**
 * @name exports
 * @static
 * @summary Arguments for the subscription query
 */
module.exports = {
	'add-tag': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.tag',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-add-tag',
		description: 'A tag to be added to the resource matching the criteria',
	},
	contact: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.contact',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-contact',
		description: 'Contact details for the subscription',
	},
	criteria: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Subscription.criteria',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-criteria',
		description: 'The search rules used to determine when to send a notification',
	},
	payload: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Subscription.channel.payload',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-payload',
		description: 'The mime-type of the notification payload',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-status',
		description: 'The current state of the subscription',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Subscription.channel.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-type',
		description: 'The type of channel for the sent notifications',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Subscription.channel.endpoint',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-url',
		description: 'The uri that will receive the notifications',
	},
};

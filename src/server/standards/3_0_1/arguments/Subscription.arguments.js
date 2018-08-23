module.exports = {
	ADD_TAG: {
		name: 'Add_tag',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-add-tag',
		description: 'A tag to be added to the resource matching the criteria.',
	},
	CONTACT: {
		name: 'Contact',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-contact',
		description: 'Contact details for the subscription.',
	},
	CRITERIA: {
		name: 'Criteria',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-criteria',
		description: 'The search rules used to determine when to send a notification.',
	},
	PAYLOAD: {
		name: 'Payload',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-payload',
		description: 'The mime-type of the notification payload.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-status',
		description: 'The current state of the subscription.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-type',
		description: 'The type of channel for the sent notifications.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Subscription-url',
		description: 'The uri that will receive the notifications.',
	},
};

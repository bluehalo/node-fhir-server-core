/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ADD_TAG: {
		name: 'add-tag',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'A tag to be added to the resource matching the criteria',
	},
	CONTACT: {
		name: 'contact',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'Contact details for the subscription',
	},
	CRITERIA: {
		name: 'criteria',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'The search rules used to determine when to send a notification',
	},
	PAYLOAD: {
		name: 'payload',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'The mime-type of the notification payload',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'The current state of the subscription',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'The type of channel for the sent notifications',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#subscription',
		documentation: 'The uri that will receive the notifications',
	},
};

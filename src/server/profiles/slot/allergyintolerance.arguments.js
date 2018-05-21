/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#slot',
		documentation: 'A Slot Identifier',
	},
	SCHEDULE: {
		name: 'schedule',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#slot',
		documentation: 'The Schedule Resource that we are seeking a slot within',
	},
	SLOT_TYPE: {
		name: 'slot-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#slot',
		documentation: 'The type of appointments that can be booked into the slot',
	},
	START: {
		name: 'start',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#slot',
		documentation: 'Appointment date/time.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#slot',
		documentation: 'The free/busy status of the appointment',
	},
};

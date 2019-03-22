/**
 * @name exports
 * @static
 * @summary Arguments for the slot query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-identifier',
		description: 'A Slot Identifier',
	},
	schedule: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Slot.schedule',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-schedule',
		description: 'The Schedule Resource that we are seeking a slot within',
	},
	'slot-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.serviceType',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-slot-type',
		description: 'The type of appointments that can be booked into the slot',
	},
	start: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Slot.start',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-start',
		description: 'Appointment date/time.',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-status',
		description: 'The free/busy status of the appointment',
	},
};

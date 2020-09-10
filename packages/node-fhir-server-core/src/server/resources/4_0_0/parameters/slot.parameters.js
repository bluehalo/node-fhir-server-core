/**
 * @name exports
 * @static
 * @summary Arguments for the slot query
 */
module.exports = {
	'appointment-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.appointmentType',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-appointment-type',
		description: 'The style of appointment or patient that may be booked in the slot (not service type)',
	},
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
	'service-category': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.serviceCategory',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-service-category',
		description: 'A broad categorization of the service that is to be performed during this appointment',
	},
	'service-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.serviceType',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-service-type',
		description: 'The type of appointments that can be booked into the slot',
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Slot.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-specialty',
		description:
			'The specialty of a practitioner that would be required to perform the service requested in this appointment',
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

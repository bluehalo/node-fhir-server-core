module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-identifier',
		documentation: 'A Slot Identifier.',
	},
	SCHEDULE: {
		name: 'schedule',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-schedule',
		documentation: 'The Schedule Resource that we are seeking a slot within.',
	},
	SLOT_TYPE: {
		name: 'slot-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-slot-type',
		documentation: 'The type of appointments that can be booked into the slot.',
	},
	START: {
		name: 'start',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-start',
		documentation: 'Appointment date/time.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-status',
		documentation: 'The free/busy status of the appointment.',
	},
};

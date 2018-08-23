module.exports = {
	FB_TYPE: {
		name: 'fb-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-fb-type',
		description: 'The free/busy status of the appointment.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-identifier',
		description: 'A Slot Identifier.',
	},
	SCHEDULE: {
		name: 'schedule',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-schedule',
		description: 'The Schedule Resource that we are seeking a slot within.',
	},
	SLOT_TYPE: {
		name: 'slot-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-slot-type',
		description: 'The type of appointments that can be booked into the slot.',
	},
	START: {
		name: 'start',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-start',
		description: 'Appointment date/time.',
	},
};

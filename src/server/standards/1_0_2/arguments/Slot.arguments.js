module.exports = {
	FB_TYPE: {
		name: 'Fb_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-fb-type',
		description: 'The free/busy status of the appointment.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-identifier',
		description: 'A Slot Identifier.',
	},
	SCHEDULE: {
		name: 'Schedule',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-schedule',
		description: 'The Schedule Resource that we are seeking a slot within.',
	},
	SLOT_TYPE: {
		name: 'Slot_type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-slot-type',
		description: 'The type of appointments that can be booked into the slot.',
	},
	START: {
		name: 'Start',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Slot-start',
		description: 'Appointment date/time.',
	},
};

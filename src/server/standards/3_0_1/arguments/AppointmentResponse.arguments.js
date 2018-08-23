module.exports = {
	ACTOR: {
		name: 'Actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-actor',
		description: 'The Person, Location/HealthcareService or Device that this appointment response replies for.',
	},
	APPOINTMENT: {
		name: 'Appointment',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-appointment',
		description: 'The appointment that the response is attached to.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-identifier',
		description: 'An Identifier in this appointment response.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-location',
		description: 'This Response is for this Location.',
	},
	PART_STATUS: {
		name: 'Part_status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-part-status',
		description: 'The participants acceptance status for this appointment.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-patient',
		description: 'This Response is for this Patient.',
	},
	PRACTITIONER: {
		name: 'Practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-practitioner',
		description: 'This Response is for this Practitioner.',
	},
};

module.exports = {
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-actor',
		description: 'The Person, Location/HealthcareService or Device that this appointment response replies for.',
	},
	APPOINTMENT: {
		name: 'appointment',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-appointment',
		description: 'The appointment that the response is attached to.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-identifier',
		description: 'An Identifier in this appointment response.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-location',
		description: 'This Response is for this Location.',
	},
	PART_STATUS: {
		name: 'part-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-part-status',
		description: 'The participants acceptance status for this appointment.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-patient',
		description: 'This Response is for this Patient.',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-practitioner',
		description: 'This Response is for this Practitioner.',
	},
};

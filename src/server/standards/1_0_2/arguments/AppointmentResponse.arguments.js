/**
 * @name exports
 * @static
 * @summary Arguments for the appointmentresponse query
 */
module.exports = {
	actor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-actor',
		description: 'The Person, Location/HealthcareService or Device that this appointment response replies for',
	},
	appointment: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.appointment',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-appointment',
		description: 'The appointment that the response is attached to',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AppointmentResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-identifier',
		description: 'An Identifier in this appointment response',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-location',
		description: 'This Response is for this Location',
	},
	'part-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AppointmentResponse.participantStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-part-status',
		description: 'The participants acceptance status for this appointment',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-patient',
		description: 'This Response is for this Patient',
	},
	practitioner: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/AppointmentResponse-practitioner',
		description: 'This Response is for this Practitioner',
	},
};

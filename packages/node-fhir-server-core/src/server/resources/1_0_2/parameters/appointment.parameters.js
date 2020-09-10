/**
 * @name exports
 * @static
 * @summary Arguments for the appointment query
 */
module.exports = {
	actor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-actor',
		description: 'Any one of the individuals participating in the appointment',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Appointment.start',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-date',
		description: 'Appointment date/time.',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-identifier',
		description: 'An Identifier of the Appointment',
	},
	location: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-location',
		description: 'This location is listed in the participants of the appointment',
	},
	'part-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.participant.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-part-status',
		description:
			'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests.',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-patient',
		description: 'One of the individuals of the appointment is this patient',
	},
	practitioner: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-practitioner',
		description: 'One of the individuals of the appointment is this practitioner',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-status',
		description: 'The overall status of the appointment',
	},
};

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
	'appointment-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.appointmentType',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-appointment-type',
		description: 'The style of appointment or patient that has been booked in the slot (not service type)',
	},
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-based-on',
		description: 'The service request this appointment is allocated to assess',
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
	'reason-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.reasonCode',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-reason-code',
		description: 'Coded reason this appointment is scheduled',
	},
	'reason-reference': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.reasonReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-reason-reference',
		description: 'Reason the appointment is to take place (resource)',
	},
	'service-category': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.serviceCategory',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-service-category',
		description: 'A broad categorization of the service that is to be performed during this appointment',
	},
	'service-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.serviceType',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-service-type',
		description: 'The specific service that is to be performed during this appointment',
	},
	slot: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.slot',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-slot',
		description: 'The slots that this appointment is filling',
	},
	specialty: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.specialty',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-specialty',
		description:
			'The specialty of a practitioner that would be required to perform the service requested in this appointment',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Appointment.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-status',
		description: 'The overall status of the appointment',
	},
	'supporting-info': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Appointment.supportingInformation',
		definition: 'http://hl7.org/fhir/SearchParameter/Appointment-supporting-info',
		description: 'Additional information to support the appointment',
	},
};

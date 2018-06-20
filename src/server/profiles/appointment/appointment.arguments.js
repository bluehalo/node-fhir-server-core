module.exports = {
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'Any one of the individuals participating in the appointment',
	},
	APPOINTMENT_TYPE: {
		name: 'appointment-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'The style of appointment or patient that has been booked in the slot (not service type)',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'Appointment date/time.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'An Identifier of the Appointment',
	},
	INCOMINGREFERRAL: {
		name: 'incomingreferral',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'The ReferralRequest provided as information to allocate to the Encounter',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'This location is listed in the participants of the appointment',
	},
	PART_STATUS: {
		name: 'part-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'One of the individuals of the appointment is this patient',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'One of the individuals of the appointment is this practitioner',
	},
	SERVICE_TYPE: {
		name: 'service-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'The specific service that is to be performed during this appointment',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointment',
		documentation: 'The overall status of the appointment',
	},
};

module.exports = {
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'The Person, Location/HealthcareService or Device that this appointment response replies for',
	},
	APPOINTMENT: {
		name: 'appointment',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'The appointment that the response is attached to',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'An Identifier in this appointment response',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'This Response is for this Location',
	},
	PART_STATUS: {
		name: 'part-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'The participants acceptance status for this appointment',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'This Response is for this Patient',
	},
	PRACTITIONER: {
		name: 'practitioner',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#appointmentresponse',
		documentation: 'This Response is for this Practitioner',
	},
};

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#schedule',
		documentation: 'Is the schedule in active use',
	},
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#schedule',
		documentation: 'The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#schedule',
		documentation: 'Search for Schedule resources that have a period that contains this date specified',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#schedule',
		documentation: 'A Schedule Identifier',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#schedule',
		documentation: 'The type of appointments that can be booked into associated slot(s)',
	},
};

module.exports = {
	ACTIVE: {
		name: 'Active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Schedule-active',
		description: 'Is the schedule in active use.',
	},
	ACTOR: {
		name: 'Actor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Schedule-actor',
		description: 'The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Schedule-date',
		description: 'Search for Schedule resources that have a period that contains this date specified.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Schedule-identifier',
		description: 'A Schedule Identifier.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Schedule-type',
		description: 'The type of appointments that can be booked into associated slot(s).',
	},
};

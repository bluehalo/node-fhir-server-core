/**
 * @name exports
 * @description All the possible patient arguments defined in one place
 */
module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Type of team'
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Encounter or episode associated with CareTeam'
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Time period team covers'
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Encounter or episode associated with CareTeam'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'External Ids for this team'
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Who is involved'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Who care team is for'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'proposed | active | suspended | inactive | entered-in-error'
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#careteam',
		documentation: 'Who care team is for'
	}
};

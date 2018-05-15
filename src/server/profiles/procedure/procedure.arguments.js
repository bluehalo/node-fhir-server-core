/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'A request for this procedure'
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Classification of the procedure'
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'A code to identify a procedure'
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Encounter or episode associated with the procedure'
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Date/Period the procedure was performed'
	},
	DEFINITION: {
		name: 'definition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Instantiates protocol or definition'
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Search by encounter'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'A unique identifier for a procedure'
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Where the procedure happened'
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Part of referenced event'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Search by subject - a patient'
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'The reference to the practitioner'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'preparation | in-progress | suspended | aborted | completed | entered-in-error | unknown'
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#procedure',
		documentation: 'Search by subject'
	}
};

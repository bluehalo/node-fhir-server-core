/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchsubject',
		documentation: 'Start and end of participation',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchsubject',
		documentation: 'Business Identifier for research subject',
	},
	INDIVIDUAL: {
		name: 'individual',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchsubject',
		documentation: 'Who is part of study',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchsubject',
		documentation: 'Who is part of study',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchsubject',
		documentation: 'candidate | enrolled | active | suspended | withdrawn | completed',
	},
};

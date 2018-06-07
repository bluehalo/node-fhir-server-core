/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Classifications for the study',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'When the study began and ended',
	},
	FOCUS: {
		name: 'focus',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Drugs, devices, conditions, etc. under study',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Business Identifier for study',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Geographic region(s) for study',
	},
	KEYWORD: {
		name: 'keyword',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Used to search for the study',
	},
	PARTOF: {
		name: 'partof',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Part of larger study',
	},
	PRINCIPALINVESTIGATOR: {
		name: 'principalinvestigator',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'The individual responsible for the study',
	},
	PROTOCOL: {
		name: 'protocol',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Steps followed in executing study',
	},
	SITE: {
		name: 'site',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Location involved in study execution',
	},
	SPONSOR: {
		name: 'sponsor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Organization responsible for the study',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'draft | in-progress | suspended | stopped | completed | entered-in-error',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#researchstudy',
		documentation: 'Name for this study',
	},
};

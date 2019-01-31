/**
 * @name exports
 * @static
 * @summary Arguments for the researchstudy query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchStudy.category',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-category',
		description: 'Classifications for the study',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ResearchStudy.period',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-date',
		description: 'When the study began and ended',
	},
	focus: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchStudy.focus',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-focus',
		description: 'Drugs, devices, conditions, etc. under study',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchStudy.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-identifier',
		description: 'Business Identifier for study',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchStudy.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-jurisdiction',
		description: 'Geographic region(s) for study',
	},
	keyword: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchStudy.keyword',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-keyword',
		description: 'Used to search for the study',
	},
	partof: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchStudy.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-partof',
		description: 'Part of larger study',
	},
	principalinvestigator: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchStudy.principalInvestigator',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-principalinvestigator',
		description: 'The individual responsible for the study',
	},
	protocol: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchStudy.protocol',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-protocol',
		description: 'Steps followed in executing study',
	},
	site: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchStudy.site',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-site',
		description: 'Location involved in study execution',
	},
	sponsor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ResearchStudy.sponsor',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-sponsor',
		description: 'Organization responsible for the study',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ResearchStudy.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-status',
		description: 'draft | in-progress | suspended | stopped | completed | entered-in-error',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'ResearchStudy.title',
		definition: 'http://hl7.org/fhir/SearchParameter/ResearchStudy-title',
		description: 'Name for this study',
	},
};

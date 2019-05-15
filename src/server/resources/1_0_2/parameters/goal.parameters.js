/**
 * @name exports
 * @static
 * @summary Arguments for the goal query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Goal.category',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-category',
		description: 'E.g. Treatment, dietary, behavioral, etc.',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Goal.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-identifier',
		description: 'External Ids for this goal',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Goal.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-patient',
		description: 'Who this goal is intended for',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Goal.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-status',
		description: 'proposed | planned | accepted | rejected | in-progress | achieved | sustaining | on-hold | cancelled',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Goal.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-subject',
		description: 'Who this goal is intended for',
	},
	targetdate: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Goal.targetDate',
		definition: 'http://hl7.org/fhir/SearchParameter/Goal-targetdate',
		description: 'Reach goal on or before',
	},
};

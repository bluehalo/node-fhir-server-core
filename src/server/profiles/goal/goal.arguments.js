/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'E.g. Treatment, dietary, behavioral, etc.'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'External Ids for this goal'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'Who this goal is intended for'
	},
	START_DATE: {
		name: 'start-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'When goal pursuit begins'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'proposed | accepted | planned | in-progress | on-target | ahead-of-target | behind-target | sustaining | achieved | on-hold | cancelled | entered-in-error | rejected'
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'Who this goal is intended for'
	},
	TARGET_DATE: {
		name: 'target-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#goal',
		documentation: 'Reach goal on or before'
	}
};

/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses of this medicine code',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Returns dispenses with a specific context (episode or episode of care)',
	},
	DESTINATION: {
		name: 'destination',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses that should be sent to a specific destination',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses with this external identifier',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses of this medicine resource',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'The identity of a patient to list dispenses for',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses performed by a specific individual',
	},
	PRESCRIPTION: {
		name: 'prescription',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'The identity of a prescription to list dispenses from',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'The identity of a receiver to list dispenses for',
	},
	RESPONSIBLEPARTY: {
		name: 'responsibleparty',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses with the specified responsible party',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses with a specified dispense status',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'The identity of a patient to list dispenses for',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Return dispenses of a specific type',
	},
	WHENHANDEDOVER: {
		name: 'whenhandedover',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Returns dispenses handed over on this date',
	},
	WHENPREPARED: {
		name: 'whenprepared',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medicationdispense',
		documentation: 'Returns dispenses prepared on this date',
	},
};

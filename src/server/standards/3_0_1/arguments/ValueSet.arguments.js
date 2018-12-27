module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		documentation:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  .',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-date',
		documentation: 'The value set publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-description',
		documentation: 'The description of the value set.',
	},
	EXPANSION: {
		name: 'expansion',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-expansion',
		documentation: 'Uniquely identifies this expansion.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-identifier',
		documentation: 'External identifier for the value set.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction',
		documentation: 'Intended jurisdiction for the value set.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-name',
		documentation: 'Computationally friendly name of the value set.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-publisher',
		documentation: 'Name of the publisher of the value set.',
	},
	REFERENCE: {
		name: 'reference',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-reference',
		documentation: 'A code system included or excluded in the value set or an imported value set.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-status',
		documentation: 'The current status of the value set.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-title',
		documentation: 'The human-friendly name of the value set.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-url',
		documentation: 'The uri that identifies the value set.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-version',
		documentation: 'The business version of the value set.',
	},
	FILTER: {
		name: 'filter',
		type: 'string',
		definition: 'http://hl7.org/fhir/OperationDefinition/ValueSet-expand',
		documentation: 'Filtering the value set',
	},
};

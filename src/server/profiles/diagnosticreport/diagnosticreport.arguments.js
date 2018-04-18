/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'Reference to the procedure request.'
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'Which diagnostic discipline/department created the report'
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result'
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'Healthcare event (Episode of Care or Encounter) related to the report'
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The clinically relevant time of the report'
	},
	DIAGNOSIS: {
		name: 'diagnosis',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'A coded diagnosis on the report'
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The Encounter when the order was made'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'An identifier for the report'
	},
	IMAGE: {
		name: 'image',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'A reference to the image source.'
	},
	ISSUED: {
		name: 'issued',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'When the report was issued'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The subject of the report if a patient'
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'Who was the source of the report (organization)'
	},
	RESULT: {
		name: 'result',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'Link to an atomic result (observation resource)\n'
	},
	SPECIMEN: {
		name: 'specimen',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The specimen details'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The status of the report'
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#diagnosticreport',
		documentation: 'The subject of the report'
	}
};

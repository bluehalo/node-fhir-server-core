/**
 * @name exports
 * @static
 * @summary Arguments for the bodystructure query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'BodyStructure.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/BodyStructure-identifier',
		description: 'Bodystructure identifier',
	},
	location: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'BodyStructure.location',
		definition: 'http://hl7.org/fhir/SearchParameter/BodyStructure-location',
		description: 'Body site',
	},
	morphology: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'BodyStructure.morphology',
		definition: 'http://hl7.org/fhir/SearchParameter/BodyStructure-morphology',
		description: 'Kind of Structure',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'BodyStructure.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/BodyStructure-patient',
		description: 'Who this is about',
	},
};

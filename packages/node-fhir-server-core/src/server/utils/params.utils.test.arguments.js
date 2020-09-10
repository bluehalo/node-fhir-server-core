module.exports.makeResource = (_args, _logger) => {
	return {
		profile: {
			reference: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1',
		},
		searchInclude: [
			'*',
			'AllergyIntolerance:patient',
			'CarePlan:patient',
			'Condition:patient',
			'DocumentReference:patient',
			'Encounter:patient',
			'Flag:patient',
			'Immunization:patient',
			'MedicationStatement:patient',
			'Observation:patient',
			'Patient:general-practitioner',
			'Patient:organization',
			'Procedure:patient',
		],
		searchParam: [
			{
				documentation: 'The ID of the resource',
				name: '_id',
				type: 'string',
			},
			{
				documentation: 'A postalCode specified in an address',
				name: 'address-postalcode',
				type: 'string',
			},
			{
				documentation: "The patient's date of birth",
				name: 'birthdate',
				type: 'date',
			},
			{
				documentation: 'A value in an email contact',
				name: 'email',
				type: 'string',
			},
			{
				documentation: 'A portion of the family name of the patient',
				name: 'family',
				type: 'string',
			},
			{
				documentation: 'Gender of the patient',
				name: 'gender',
				type: 'string',
			},
			{
				documentation: 'A portion of the given name of the patient',
				name: 'given',
				type: 'string',
			},
			{
				documentation: 'A patient identifier',
				name: 'identifier',
				type: 'token',
			},
			{
				documentation:
					'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
				name: 'name',
				type: 'string',
			},
			{
				documentation: 'A value in a phone contact',
				name: 'bar',
				type: 'string',
			},
		],
		type: 'Patient',
	};
};

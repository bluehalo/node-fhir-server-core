module.exports.makeResource = (_args, _logger) => {
	return {
		profile: {
			reference: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1',
		},
		searchParam: [
			{
				documentation: 'The ID of the resource',
				name: '_id',
				type: 'string',
			},
		],
		type: 'Foobar',
	};
};

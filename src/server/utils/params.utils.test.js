const path = require('path');
const { getSearchParameters } = require(path.resolve('./src/server/utils/params.utils'));

describe('Param Utils Tests', () => {
	describe('getSearchParameters', () => {
		test('should grab the common parameters for all versions', () => {
			let dstu2Params = getSearchParameters('patient', '1_0_2');
			let stu3Params = getSearchParameters('patient', '3_0_1');
			let r4Params = getSearchParameters('patient', '4_0_0');

			expect(Array.isArray(dstu2Params)).toBeTruthy();
			expect(dstu2Params).toHaveLength(35);
			expect(Array.isArray(stu3Params)).toBeTruthy();
			expect(stu3Params).toHaveLength(33);
			expect(Array.isArray(r4Params)).toBeTruthy();
			expect(r4Params).toHaveLength(32);
		});

		test('should throw an error if given an invalid parameter name', () => {
			expect(() => {
				/* eslint-disable no-unused-vars */
				let badParams = getSearchParameters('foobar', '2.3.4');
				/* eslint-enable no-unused-vars */
			}).toThrowError('Cannot find module');
		});

		test('should return an array with name added to each argument', () => {
			let r4Params = getSearchParameters('patient', '4_0_0');

			expect(r4Params.every(param => param.name !== undefined)).toBeTruthy();
		});

		test('should override the resource arguments when custom arguments provided as path', () => {
			let custom = path.resolve('./src/server/utils/params.utils.test.arguments.js');
			let stu3Params = getSearchParameters('patient', '3_0_1', custom);

			expect(Array.isArray(stu3Params)).toBeTruthy();
			expect(stu3Params).toHaveLength(17);
		});

		test('should override the resource arguments when custom arguments provided as object', () => {
			let custom = {
				makeResource: (_args, _logger) => {
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
				},
			};
			let stu3Params = getSearchParameters('patient', '3_0_1', custom);

			expect(Array.isArray(stu3Params)).toBeTruthy();
			expect(stu3Params).toHaveLength(17);
		});
	});
});

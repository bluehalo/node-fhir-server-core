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

		test('should override the resource arguments when custom arguments provided', () => {
			let custom = path.resolve('./src/server/utils/params.utils.test.arguments.js');
			let stu3Params = getSearchParameters('patient', '3_0_1', custom);

			expect(Array.isArray(stu3Params)).toBeTruthy();
			expect(stu3Params).toHaveLength(17);
		});
	});
});

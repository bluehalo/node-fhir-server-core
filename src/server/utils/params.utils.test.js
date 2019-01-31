const path = require('path');
const {
	_getSearchParameters,
	getSearchParameters
} = require(path.resolve('./src/server/utils/params.utils'));

describe('Param Utils Tests', () => {
	test('Should get the built in arguments when no custom module provided', () => {
		let params = getSearchParameters('Patient', '3_0_1');
		expect(typeof params).toEqual('object');
		expect(params.length).toEqual(40);
	});
	test('Should get the built in arguments when custom module provided but with no matching version', () => {
		let params = getSearchParameters('Patient', '1_0_2');
		expect(params).toBeUndefined();
		expect(typeof params).toEqual('object');
		expect(params.length).toEqual(42);
	});
	test('Should get the custom arguments when custom module provided', () => {
		let params = getSearchParameters(
			'Patient',
			'3_0_1',
			path.resolve('./src/server/utils/params.utils.test.arguments.js'),
		);
		expect(typeof params).toEqual('object');
		expect(params.length).toEqual(26);
		let bar = params.find(p => p.name === 'bar');
		expect(typeof bar).toEqual('object');
	});

	describe('getSearchParamaters', () => {
		test('should grab the common parameters for all versions', () => {
			let dstu2Params = _getSearchParameters('patient', '1_0_2');
			let stu3Params = _getSearchParameters('patient', '3_0_1');
			let r4Params = _getSearchParameters('patient', '4_0_0');

			expect(Array.isArray(dstu2Params)).toBeTruthy();
			expect(dstu2Params).toHaveLength(36);
			expect(Array.isArray(stu3Params)).toBeTruthy();
			expect(stu3Params).toHaveLength(34);
			expect(Array.isArray(r4Params)).toBeTruthy();
			expect(r4Params).toHaveLength(33);
		});

		test('should throw an error if given an invalid parameter name', () => {
			expect(() => {
				/* eslint-disable no-unused-vars */
				let badParams = _getSearchParameters('foobar', '2.3.4');
				/* eslint-enable no-unused-vars */
			}).toThrowError(
				"Cannot find module '../resources/2.3.4/parameters/foobar.parameters.js'"
			);
		});

		test('should return an array with name added to each argument', () => {
			let r4Params = _getSearchParameters('patient', '4_0_0');

			expect(r4Params.every(param => param.name !== undefined)).toBeTruthy();
		});

		test('should override the resource arguments when custom arguments provided', () => {
			let custom = path.resolve('./src/server/utils/params.utils.test.arguments.js');
			let stu3Params = _getSearchParameters('patient', '3_0_1', custom);

			expect(Array.isArray(stu3Params)).toBeTruthy();
			expect(stu3Params).toHaveLength(18);
		});
	});

});

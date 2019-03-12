const path = require('path');
const getSearchParameters = require(path.resolve('./src/server/utils/params.utils')).getSearchParamaters;

describe('Param Utils Tests', () => {
	test('Should get the built in arguments when no custom module provided', () => {
		let params = getSearchParameters('Patient', '3_0_1');
		expect(typeof params).toEqual('object');
		expect(params.length).toEqual(41);
	});
	test('Should get the built in arguments when custom module provided but with no matching version', () => {
		let params = getSearchParameters('Patient', '1_0_2');
		expect(typeof params).toEqual('object');
		expect(params.length).toEqual(43);
	});
	test('Should get the custom arguments when custom module provided', () => {
		let params = getSearchParameters(
			'Patient',
			'3_0_1',
			path.resolve('./src/server/utils/params.utils.test.arguments.js'),
		);
		expect(typeof params).toEqual('object');
		expect(params.length).toEqual(27);
		let bar = params.find(p => p.name === 'bar');
		expect(typeof bar).toEqual('object');
	});
});

const path = require('path');
const Code = require(path.resolve('./src/server/resources/types/Code'));

describe('Code Type Tests', () => {
	test('should create a Code Object by constructor', () => {
		let code = new Code('test');

		expect(code).toBeInstanceOf(Code);
		expect(code.code).toEqual('test');
	});

	test('should create a Code Object and set code', () => {
		let code = new Code();
		code.code = 'test';
		expect(code).toBeInstanceOf(Code);
		expect(code.code).toEqual('test');
	});

	test('should serialize to string', () => {
		let code = new Code('test');

		expect(code).toBeInstanceOf(Code);
		expect(JSON.stringify(code)).toEqual('"test"');
	});

	test('should trim starting and trailing spaces', () => {
		let code = new Code('    test    ');

		expect(code).toBeInstanceOf(Code);
		expect(code.code).toEqual('test');
	});
});

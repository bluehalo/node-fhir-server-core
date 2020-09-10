const { resolveFromVersion, resolveSchema, resolve } = require('./resolve.utils');
const path = require('path');

describe('Resolve Utils Test', () => {
	describe('resolve', () => {
		test('should resolve to `src` as the base when no relative path is provided', () => {
			let base = path.basename(resolve());
			expect(base).toEqual('src');
		});

		test('should resolve to a path relative to the base', () => {
			let relative_path = 'scooby/doo';
			let diff = path.relative(resolve(''), resolve(relative_path));
			expect(diff).toEqual(relative_path);
		});
	});

	describe('resolveFromVersion', () => {
		test('should default to version 4 when no arguments are provided', () => {
			let base = resolveFromVersion();
			let project_base = base.substr(base.indexOf('src'));
			expect(project_base).toEqual('src/server/resources/4_0_0');
		});

		test('should resolve to `src/resources/r4` when no relatve path is provided and version is r4', () => {
			let base = resolveFromVersion('r4');
			let project_base = base.substr(base.indexOf('src'));
			expect(project_base).toEqual('src/server/resources/r4');
		});

		test('should resolve a path relative to the version base', () => {
			let base = resolveFromVersion('3_0_1', 'scooby/doo');
			let project_base = base.substr(base.indexOf('src'));
			expect(project_base).toEqual('src/server/resources/3_0_1/scooby/doo');
		});
	});

	describe('resolveSchema', () => {
		test('should default to version 4 when no arguments are provided', () => {
			let base = resolveSchema();
			let project_base = base.substr(base.indexOf('src'));
			expect(project_base).toEqual('src/server/resources/4_0_0/schemas');
		});

		test('should resolve to `src/resources/r4` when no relatve path is provided and version is r4', () => {
			let base = resolveSchema('r4');
			let project_base = base.substr(base.indexOf('src'));
			expect(project_base).toEqual('src/server/resources/r4/schemas');
		});

		test('should resolve a path relative to the version base', () => {
			let base = resolveSchema('3_0_1', 'Patient');
			let project_base = base.substr(base.indexOf('src'));
			expect(project_base).toEqual('src/server/resources/3_0_1/schemas/patient');
		});
	});
});

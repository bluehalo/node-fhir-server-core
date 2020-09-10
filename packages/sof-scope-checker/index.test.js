const scopeChecker = require('./index.js');

describe('Scope Checker Test', () => {
	describe('invalid configuration', () => {
		test('should throw an error on bad name argument', () => {
			let responseObject = scopeChecker('', 'read', []);
			expect(responseObject.error.type).toBe('internal');
			expect(responseObject.error.message).toContain(
				'Invalid name. This parameter should be an asterisk or valid resource type.',
			);
		});

		test('should throw an error on bad action argument', () => {
			let responseObject = scopeChecker('Patient', 'writ', []);
			expect(responseObject.error.type).toBe('internal');
			expect(responseObject.error.message).toContain(
				'Invalid action. This parameter should be (read | write | *).',
			);
		});

		test('should throw an error on bad scopes argument', () => {
			let responseObject = scopeChecker('Patient', 'read', 'user/*.*');
			expect(responseObject.error.type).toBe('internal');
			expect(responseObject.error.message).toContain(
				'Invalid scopes. This parameter should be an array.',
			);
		});
	});

	describe('valid configuration', () => {
		test('should throw an error on unfound scope', () => {
			let responseObject = scopeChecker('Patient', 'write', ['user/*.read']);
			expect(responseObject.error.type).toBe('forbidden');
			expect(responseObject.error.message).toContain(
				'None of the provided scopes matched an allowed scope',
			);
			expect(responseObject.success).toBeFalsy();
		});

		test('should not throw an error on success', () => {
			let responseObject = scopeChecker('Patient', 'write', [
				'user/*.read',
				'user/Patient.write',
			]);
			expect(responseObject.error).toBeNull();
			expect(responseObject.success).toBeTruthy();
		});

		test('should not throw an error on success (all asterisks)', () => {
			let responseObject = scopeChecker('*', '*', ['user/*.*']);
			expect(responseObject.error).toBeNull();
			expect(responseObject.success).toBeTruthy();
		});

		test('should allow * as an action', () => {
			let responseObject = scopeChecker('Patient', '*', [
				'user/*.read',
				'user/Patient.*',
			]);
			expect(responseObject.error).toBeNull();
			expect(responseObject.success).toBeTruthy();
		});
	});
});

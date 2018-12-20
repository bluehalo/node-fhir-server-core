const {
	invalidParameter,
	unauthorized,
	insufficientScope,
	notFound,
	deleted,
	internal,
	isServerError,
} = require('./error.utils');

const { ISSUE, VERSIONS } = require('../../constants');

describe('Error Utils Tests', () => {
	test('should return correct OperationOutcome for an invalidParameter error', () => {
		let error = invalidParameter('Age is invalid.', VERSIONS['3_0_1']);
		let issue = error.issue[0];

		expect(error.statusCode).toEqual(400);
		expect(error.issue).toHaveLength(1);

		expect(issue.code).toBe(ISSUE.CODE.INVALID);
		expect(issue.severity).toBe(ISSUE.SEVERITY.ERROR);
		expect(issue.diagnostics).toBe('Age is invalid.');
	});

	test('should return correct OperationOutcome for an unauthorized error', () => {
		let errorWithMessage = unauthorized('You shall not pass.', VERSIONS['3_0_1']);
		let errorWithoutMessage = unauthorized('', VERSIONS['3_0_1']);

		expect(errorWithMessage.statusCode).toEqual(401);
		expect(errorWithMessage.issue).toHaveLength(1);

		let issueWithMessage = errorWithMessage.issue[0];
		let issueWithoutMessage = errorWithoutMessage.issue[0];

		// Check the code and severity on one
		expect(issueWithMessage.code).toBe(ISSUE.CODE.FORBIDDEN);
		expect(issueWithoutMessage.severity).toBe(ISSUE.SEVERITY.ERROR);

		// Check the message for both
		expect(issueWithMessage.diagnostics).toBe('You shall not pass.');
		expect(issueWithoutMessage.diagnostics).toBe('401: Unauthorized request');
	});

	test('should return correct OperationOutcome for an insufficientScope error', () => {
		let errorWithMessage = insufficientScope('Not enough scope for this action.', VERSIONS['3_0_1']);
		let errorWithoutMessage = insufficientScope('', VERSIONS['3_0_1']);

		expect(errorWithMessage.statusCode).toEqual(403);
		expect(errorWithMessage.issue).toHaveLength(1);

		let issueWithMessage = errorWithMessage.issue[0];
		let issueWithoutMessage = errorWithoutMessage.issue[0];

		// Check the code and severity on one
		expect(issueWithMessage.code).toBe(ISSUE.CODE.FORBIDDEN);
		expect(issueWithoutMessage.severity).toBe(ISSUE.SEVERITY.ERROR);

		// Check the message for both
		expect(issueWithMessage.diagnostics).toBe('Not enough scope for this action.');
		expect(issueWithoutMessage.diagnostics).toBe('403: Insufficient scope');
	});

	test('should return correct OperationOutcome for an notFound error', () => {
		let errorWithMessage = notFound('Somthing not found.', VERSIONS['3_0_1']);
		let errorWithoutMessage = notFound('', VERSIONS['3_0_1']);

		expect(errorWithMessage.statusCode).toEqual(404);
		expect(errorWithMessage.issue).toHaveLength(1);

		let issueWithMessage = errorWithMessage.issue[0];
		let issueWithoutMessage = errorWithoutMessage.issue[0];

		// Check the code and severity on one
		expect(issueWithMessage.code).toBe(ISSUE.CODE.NOT_FOUND);
		expect(issueWithoutMessage.severity).toBe(ISSUE.SEVERITY.ERROR);

		// Check the message for both
		expect(issueWithMessage.diagnostics).toBe('Somthing not found.');
		expect(issueWithoutMessage.diagnostics).toBe('404: Not found');
	});

	test('should return correct OperationOutcome for an deleted error', () => {
		let errorWithMessage = deleted('This resource has been deleted.', VERSIONS['3_0_1']);
		let errorWithoutMessage = deleted('', VERSIONS['3_0_1']);

		expect(errorWithMessage.statusCode).toEqual(410);
		expect(errorWithMessage.issue).toHaveLength(1);

		let issueWithMessage = errorWithMessage.issue[0];
		let issueWithoutMessage = errorWithoutMessage.issue[0];

		// Check the code and severity on one
		expect(issueWithMessage.code).toBe(ISSUE.CODE.NOT_FOUND);
		expect(issueWithoutMessage.severity).toBe(ISSUE.SEVERITY.ERROR);

		// Check the message for both
		expect(issueWithMessage.diagnostics).toBe('This resource has been deleted.');
		expect(issueWithoutMessage.diagnostics).toBe('410: Resource deleted');
	});

	test('should return correct OperationOutcome for an internal error', () => {
		let errorWithMessage = internal('Internal Server Error.', VERSIONS['3_0_1']);
		let errorWithoutMessage = internal('', VERSIONS['3_0_1']);

		expect(errorWithMessage.statusCode).toEqual(500);
		expect(errorWithMessage.issue).toHaveLength(1);

		let issueWithMessage = errorWithMessage.issue[0];
		let issueWithoutMessage = errorWithoutMessage.issue[0];

		// Check the code and severity on one
		expect(issueWithMessage.code).toBe(ISSUE.CODE.EXCEPTION);
		expect(issueWithoutMessage.severity).toBe(ISSUE.SEVERITY.ERROR);

		// Check the message for both
		expect(issueWithMessage.diagnostics).toBe('Internal Server Error.');
		expect(issueWithoutMessage.diagnostics).toBe('500: Internal server error');
	});

	test('should correctly determine if an error is an OperationOutcome', () => {
		let normalError = new Error('FooBar');
		let operationError = invalidParameter('', VERSIONS['3_0_1']);
		let operationErrorWithoutVersion = invalidParameter('');

		expect(isServerError(normalError, VERSIONS['3_0_1'])).toBeFalsy();
		expect(isServerError(operationError, VERSIONS['3_0_1'])).toBeTruthy();
		expect(isServerError(operationErrorWithoutVersion, VERSIONS['3_0_1'])).toBeTruthy();
	});
});

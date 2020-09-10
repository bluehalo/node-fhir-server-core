/**
 * @name allowedScopes
 * @description Generate an array of expected scopes. If a user is accessing a
 * protected resource, one of these scopes must be present in the user's defined
 * scopes.
 * @param { string } name - Profile name we are checking scopes for
 * @param { string } action - read or write action
 * @return { Array<string> } - Array of scopes, one of which would be required
 * for the request to be successful
 */
function allowedScopes(name, action) {
	return [
		'user/*.*',
		`user/*.${action}`,
		`user/${name}.*`,
		`user/${name}.${action}`,
		'patient/*.*',
		`patient/*.${action}`,
		`patient/${name}.*`,
		`patient/${name}.${action}`,
		'system/*.*',
		`system/*.${action}`,
		`system/${name}.*`,
		`system/${name}.${action}`
	];
}

/**
 * @class FhirError
 * @extends Error
 * @description Adds an additional type property for knowing the type of issue
 */
class FhirError extends Error {
	constructor(message, type) {
		super(message);
		this.type = type;
	}
}

module.exports = function SmartOnFHIRScopeChecker(name, action, scopes) {
	if (!Array.isArray(scopes)) {
		return {
			error: new FhirError(
				'Invalid scopes. This parameter should be an array.',
				'internal',
			),
			success: false,
		};
	}

	if (!(name === '*' || name.length > 1)) {
		return {
			error: new FhirError(
				'Invalid name. This parameter should be an asterisk or valid resource type.',
				'internal',
			),
			success: false,
		};
	}

	if (!(action === 'read' || action === 'write' || action === '*')) {
		return {
			error: new FhirError(
				'Invalid action. This parameter should be (read | write | *).',
				'internal',
			),
			success: false,
		};
	}

	const expectedScopes = allowedScopes(name, action);
	const hasSufficientScope = expectedScopes.some(scope => {
		return scopes.indexOf(scope) > -1;
	});

	return {
		error: hasSufficientScope
			? null
			: new FhirError(
					'None of the provided scopes matched an allowed scope.',
					'forbidden',
			  ),
		success: hasSufficientScope,
	};
};

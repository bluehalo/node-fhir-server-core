const DomainResource = require('./DomainResource');

class OperationOutcome extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OperationOutcome';
		Object.assign(this, opt);
	}

	// This is a OperationOutcome resource
	static get __resourceType() {
		return 'OperationOutcome';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__OperationOutcome = new_value;
	}

	// An error, warning or information message that results from a system action.
	get issue() {
		return this.__issue;
	}

	set issue(new_value) {
		const OperationOutcomeIssue = require('./OperationOutcomeIssue');
		this.__issue = Array.isArray(new_value)
			? new_value.map(val => new OperationOutcomeIssue(val))
			: [new OperationOutcomeIssue(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			issue: this.__issue && this.__issue.map(v => v.toJSON()),
		});
	}
}

module.exports = OperationOutcome;

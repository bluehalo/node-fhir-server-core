const DomainResource = require('./DomainResource');
const OperationOutcome_Issue = require('./OperationOutcome_Issue');

class OperationOutcome extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'OperationOutcome';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'OperationOutcome';
	}

	// This is a OperationOutcome resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['OperationOutcome'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An error, warning or information message that results from a system action.
	get issue () {
		return this._issue;
	}

	set issue ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._issue = Array.isArray(new_value) ? new_value.map(val => new OperationOutcome_Issue(val)) : [new OperationOutcome_Issue(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			issue: this.issue && this.issue.map(v => v.toJSON())
		});
	}

}

module.exports = OperationOutcome;

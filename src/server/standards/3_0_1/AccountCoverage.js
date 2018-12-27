const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class AccountCoverage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AccountCoverage';
		Object.assign(this, opt);
	}

	// This is a AccountCoverage resource
	static get __resourceType() {
		return 'AccountCoverage';
	}

	// The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).  A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const Reference = require('./Reference');
		this.__coverage = new Reference(new_value);
	}

	// The priority of the coverage in the context of this account.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this.__priority = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			coverage: this.__coverage && this.__coverage.toJSON(),
			priority: this.__priority,
		});
	}
}

module.exports = AccountCoverage;

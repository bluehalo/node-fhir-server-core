const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Account_Coverage extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Account_Coverage';
	}

	// The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).  A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = new Reference(new_value);
	}

	// The priority of the coverage in the context of this account.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this._priority = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			coverage: this._coverage && this._coverage.toJSON(),
			priority: this._priority
		});
	}

}

module.exports = Account_Coverage;

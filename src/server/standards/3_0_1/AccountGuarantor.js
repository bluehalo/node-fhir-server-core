const BackboneElement = require('./BackboneElement');

class AccountGuarantor extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AccountGuarantor';
		Object.assign(this, opt);
	}

	// This is a AccountGuarantor resource
	static get __resourceType() {
		return 'AccountGuarantor';
	}

	// The entity who is responsible.
	get party() {
		return this.__party;
	}

	set party(new_value) {
		const Reference = require('./Reference');
		this.__party = new Reference(new_value);
	}

	// A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
	get onHold() {
		return this.__onHold;
	}

	set onHold(new_value) {
		this.__onHold = new_value;
	}

	// The timeframe during which the guarantor accepts responsibility for the account.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			party: this.__party && this.__party.toJSON(),
			onHold: this.__onHold,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = AccountGuarantor;

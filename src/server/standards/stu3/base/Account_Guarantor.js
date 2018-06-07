const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const Period = require('./Period');

class Account_Guarantor extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Account_Guarantor';
	}

	// The entity who is responsible.
	get party () {
		return this._party;
	}

	set party ( new_value ) {
		this._party = new Reference(new_value);
	}

	// A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
	get onHold () {
		return this._onHold;
	}

	set onHold ( new_value ) {
		this._onHold = new_value;
	}

	// The timeframe during which the guarantor accepts responsibility for the account.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			party: this._party,
			onHold: this._onHold,
			period: this._period
		});
	}

}

module.exports = Account_Guarantor;

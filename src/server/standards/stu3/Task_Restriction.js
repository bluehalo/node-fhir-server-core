const BackboneElement = require('./BackboneElement');
const Period = require('./Period');
const Reference = require('./Reference');

class Task_Restriction extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Task_Restriction';
	}

	// Indicates the number of times the requested action should occur.
	get repetitions () {
		return this._repetitions;
	}

	set repetitions ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field repetitions`);
		}
		this._repetitions = new_value;
	}

	// Over what time-period is fulfillment sought.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
	get recipient () {
		return this._recipient;
	}

	set recipient ( new_value ) {
		this._recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			repetitions: this._repetitions,
			period: this._period,
			recipient: this._recipient
		});
	}

}

module.exports = Task_Restriction;

const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class TaskRestriction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TaskRestriction';
		Object.assign(this, opt);
	}

	// This is a TaskRestriction resource
	static get __resourceType() {
		return 'TaskRestriction';
	}

	// Indicates the number of times the requested action should occur.
	get repetitions() {
		return this.__repetitions;
	}

	set repetitions(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field repetitions`);
		}
		this.__repetitions = new_value;
	}

	// Over what time-period is fulfillment sought.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?.
	get recipient() {
		return this.__recipient;
	}

	set recipient(new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			repetitions: this.__repetitions,
			period: this.__period && this.__period.toJSON(),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
		});
	}
}

module.exports = TaskRestriction;

const Element = require('./Element');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ContactPoint extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContactPoint';
		Object.assign(this, opt);
	}

	// This is a ContactPoint resource
	static get __resourceType() {
		return 'ContactPoint';
	}

	// Telecommunications form for contact point - what communications system is required to make use of the contact.
	get system() {
		return this.__system;
	}

	set system(new_value) {
		this.__system = new_value;
	}

	// The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	// Identifies the purpose for the contact point.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
	get rank() {
		return this.__rank;
	}

	set rank(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field rank`);
		}
		this.__rank = new_value;
	}

	// Time period when the contact point was/is in use.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			value: this.__value,
			use: this.__use,
			rank: this.__rank,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = ContactPoint;

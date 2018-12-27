const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');

class Identifier extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Identifier';
		Object.assign(this, opt);
	}

	// This is a Identifier resource
	static get __resourceType() {
		return 'Identifier';
	}

	// The purpose of this identifier.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
	get system() {
		return this.__system;
	}

	set system(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field system`);
		}
		this.__system = new_value;
	}

	// The portion of the identifier typically relevant to the user and which is unique within the context of the system.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	// Time period during which identifier is/was valid for use.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Organization that issued/manages the identifier.
	get assigner() {
		return this.__assigner;
	}

	set assigner(new_value) {
		const Reference = require('./Reference');
		this.__assigner = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			use: this.__use,
			type: this.__type && this.__type.toJSON(),
			system: this.__system,
			value: this.__value,
			period: this.__period && this.__period.toJSON(),
			assigner: this.__assigner && this.__assigner.toJSON(),
		});
	}
}

module.exports = Identifier;

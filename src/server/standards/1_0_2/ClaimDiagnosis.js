const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimDiagnosis extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimDiagnosis';
		Object.assign(this, opt);
	}

	// This is a ClaimDiagnosis resource
	static get __resourceType() {
		return 'ClaimDiagnosis';
	}

	// Sequence of diagnosis which serves to order and provide a link.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// The diagnosis.
	get diagnosis() {
		return this.__diagnosis;
	}

	set diagnosis(new_value) {
		const Coding = require('./Coding');
		this.__diagnosis = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			diagnosis: this.__diagnosis && this.__diagnosis.toJSON(),
		});
	}
}

module.exports = ClaimDiagnosis;

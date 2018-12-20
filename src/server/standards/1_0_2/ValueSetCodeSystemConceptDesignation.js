const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class ValueSetCodeSystemConceptDesignation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetCodeSystemConceptDesignation';
		Object.assign(this, opt);
	}

	// This is a ValueSetCodeSystemConceptDesignation resource
	static get __resourceType() {
		return 'ValueSetCodeSystemConceptDesignation';
	}

	// The language this designation is defined for.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this.__language = new_value;
	}

	// A code that details how this designation would be used.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		const Coding = require('./Coding');
		this.__use = new Coding(new_value);
	}

	// The text value for this designation.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			language: this.__language,
			use: this.__use && this.__use.toJSON(),
			value: this.__value,
		});
	}
}

module.exports = ValueSetCodeSystemConceptDesignation;

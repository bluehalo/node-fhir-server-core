const BackboneElement = require('./BackboneElement');

class ValueSetComposeIncludeConceptDesignation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetComposeIncludeConceptDesignation';
		Object.assign(this, opt);
	}

	// This is a ValueSetComposeIncludeConceptDesignation resource
	static get __resourceType() {
		return 'ValueSetComposeIncludeConceptDesignation';
	}

	// The language this designation is defined for.
	get language() {
		return this.__language;
	}

	set language(new_value) {
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

module.exports = ValueSetComposeIncludeConceptDesignation;

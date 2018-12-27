const BackboneElement = require('./BackboneElement');

class ExpansionProfileDesignationIncludeDesignation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileDesignationIncludeDesignation';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileDesignationIncludeDesignation resource
	static get __resourceType() {
		return 'ExpansionProfileDesignationIncludeDesignation';
	}

	// The language this designation is defined for.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		this.__language = new_value;
	}

	// Which kinds of designation to include in the expansion.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		const Coding = require('./Coding');
		this.__use = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			language: this.__language,
			use: this.__use && this.__use.toJSON(),
		});
	}
}

module.exports = ExpansionProfileDesignationIncludeDesignation;

const BackboneElement = require('./BackboneElement');

class ExpansionProfileDesignationExcludeDesignation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileDesignationExcludeDesignation';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileDesignationExcludeDesignation resource
	static get __resourceType() {
		return 'ExpansionProfileDesignationExcludeDesignation';
	}

	// The language this designation is defined for.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		this.__language = new_value;
	}

	// Which kinds of designation to exclude from the expansion.
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

module.exports = ExpansionProfileDesignationExcludeDesignation;

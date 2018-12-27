const BackboneElement = require('./BackboneElement');

class ExpansionProfileDesignation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileDesignation';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileDesignation resource
	static get __resourceType() {
		return 'ExpansionProfileDesignation';
	}

	// Designations to be included.
	get include() {
		return this.__include;
	}

	set include(new_value) {
		const ExpansionProfileDesignationInclude = require('./ExpansionProfileDesignationInclude');
		this.__include = new ExpansionProfileDesignationInclude(new_value);
	}

	// Designations to be excluded.
	get exclude() {
		return this.__exclude;
	}

	set exclude(new_value) {
		const ExpansionProfileDesignationExclude = require('./ExpansionProfileDesignationExclude');
		this.__exclude = new ExpansionProfileDesignationExclude(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			include: this.__include && this.__include.toJSON(),
			exclude: this.__exclude && this.__exclude.toJSON(),
		});
	}
}

module.exports = ExpansionProfileDesignation;

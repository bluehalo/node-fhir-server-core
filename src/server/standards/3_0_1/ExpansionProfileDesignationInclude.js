const BackboneElement = require('./BackboneElement');

class ExpansionProfileDesignationInclude extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileDesignationInclude';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileDesignationInclude resource
	static get __resourceType() {
		return 'ExpansionProfileDesignationInclude';
	}

	// A data group for each designation to be included.
	get designation() {
		return this.__designation;
	}

	set designation(new_value) {
		const ExpansionProfileDesignationIncludeDesignation = require('./ExpansionProfileDesignationIncludeDesignation');
		this.__designation = Array.isArray(new_value)
			? new_value.map(val => new ExpansionProfileDesignationIncludeDesignation(val))
			: [new ExpansionProfileDesignationIncludeDesignation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			designation: this.__designation && this.__designation.map(v => v.toJSON()),
		});
	}
}

module.exports = ExpansionProfileDesignationInclude;

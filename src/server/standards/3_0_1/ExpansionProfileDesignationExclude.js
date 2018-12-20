const BackboneElement = require('./BackboneElement');

class ExpansionProfileDesignationExclude extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileDesignationExclude';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileDesignationExclude resource
	static get __resourceType() {
		return 'ExpansionProfileDesignationExclude';
	}

	// A data group for each designation to be excluded.
	get designation() {
		return this.__designation;
	}

	set designation(new_value) {
		const ExpansionProfileDesignationExcludeDesignation = require('./ExpansionProfileDesignationExcludeDesignation');
		this.__designation = Array.isArray(new_value)
			? new_value.map(val => new ExpansionProfileDesignationExcludeDesignation(val))
			: [new ExpansionProfileDesignationExcludeDesignation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			designation: this.__designation && this.__designation.map(v => v.toJSON()),
		});
	}
}

module.exports = ExpansionProfileDesignationExclude;

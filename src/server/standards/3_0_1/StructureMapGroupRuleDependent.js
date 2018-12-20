const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class StructureMapGroupRuleDependent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroupRuleDependent';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroupRuleDependent resource
	static get __resourceType() {
		return 'StructureMapGroupRuleDependent';
	}

	// Name of a rule or group to apply.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this.__name = new_value;
	}

	// Variable to pass to the rule or group.
	get variable() {
		return this.__variable;
	}

	set variable(new_value) {
		this.__variable = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			variable: this.__variable,
		});
	}
}

module.exports = StructureMapGroupRuleDependent;

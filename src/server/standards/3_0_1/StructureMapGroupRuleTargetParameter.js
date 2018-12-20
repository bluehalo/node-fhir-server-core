const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class StructureMapGroupRuleTargetParameter extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroupRuleTargetParameter';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroupRuleTargetParameter resource
	static get __resourceType() {
		return 'StructureMapGroupRuleTargetParameter';
	}

	// Parameter value - variable or literal.
	get valueId() {
		return this.__valueId;
	}

	set valueId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueId`);
		}
		this.__valueId = new_value;
	}

	// Parameter value - variable or literal.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// Parameter value - variable or literal.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// Parameter value - variable or literal.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// Parameter value - variable or literal.
	get valueDecimal() {
		return this.__valueDecimal;
	}

	set valueDecimal(new_value) {
		this.__valueDecimal = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			valueId: this.__valueId,
			valueString: this.__valueString,
			valueBoolean: this.__valueBoolean,
			valueInteger: this.__valueInteger,
			valueDecimal: this.__valueDecimal,
		});
	}
}

module.exports = StructureMapGroupRuleTargetParameter;

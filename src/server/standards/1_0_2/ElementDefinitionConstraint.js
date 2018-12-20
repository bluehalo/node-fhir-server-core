const Element = require('./Element');
const IdScalar = require('./scalars/Id.scalar');

class ElementDefinitionConstraint extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionConstraint';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionConstraint resource
	static get __resourceType() {
		return 'ElementDefinitionConstraint';
	}

	// Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
	get key() {
		return this.__key;
	}

	set key(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field key`);
		}
		this.__key = new_value;
	}

	// Description of why this constraint is necessary or appropriate.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
	}

	// Identifies the impact constraint violation has on the conformance of the instance.
	get severity() {
		return this.__severity;
	}

	set severity(new_value) {
		this.__severity = new_value;
	}

	// Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
	get human() {
		return this.__human;
	}

	set human(new_value) {
		this.__human = new_value;
	}

	// An XPath expression of constraint that can be executed to see if this constraint is met.
	get xpath() {
		return this.__xpath;
	}

	set xpath(new_value) {
		this.__xpath = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			key: this.__key,
			requirements: this.__requirements,
			severity: this.__severity,
			human: this.__human,
			xpath: this.__xpath,
		});
	}
}

module.exports = ElementDefinitionConstraint;

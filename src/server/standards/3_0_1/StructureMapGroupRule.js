const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class StructureMapGroupRule extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroupRule';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroupRule resource
	static get __resourceType() {
		return 'StructureMapGroupRule';
	}

	// Name of the rule for internal references.
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

	// Source inputs to the mapping.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const StructureMapGroupRuleSource = require('./StructureMapGroupRuleSource');
		this.__source = Array.isArray(new_value)
			? new_value.map(val => new StructureMapGroupRuleSource(val))
			: [new StructureMapGroupRuleSource(new_value)];
	}

	// Content to create because of this mapping rule.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const StructureMapGroupRuleTarget = require('./StructureMapGroupRuleTarget');
		this.__target = Array.isArray(new_value)
			? new_value.map(val => new StructureMapGroupRuleTarget(val))
			: [new StructureMapGroupRuleTarget(new_value)];
	}

	// Which other rules to apply in the context of this rule.
	get dependent() {
		return this.__dependent;
	}

	set dependent(new_value) {
		const StructureMapGroupRuleDependent = require('./StructureMapGroupRuleDependent');
		this.__dependent = Array.isArray(new_value)
			? new_value.map(val => new StructureMapGroupRuleDependent(val))
			: [new StructureMapGroupRuleDependent(new_value)];
	}

	// Documentation for this instance of data.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			source: this.__source && this.__source.map(v => v.toJSON()),
			target: this.__target && this.__target.map(v => v.toJSON()),
			dependent: this.__dependent && this.__dependent.map(v => v.toJSON()),
			documentation: this.__documentation,
		});
	}
}

module.exports = StructureMapGroupRule;

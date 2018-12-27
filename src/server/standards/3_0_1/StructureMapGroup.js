const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class StructureMapGroup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroup';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroup resource
	static get __resourceType() {
		return 'StructureMapGroup';
	}

	// A unique name for the group for the convenience of human readers.
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

	// Another group that this group adds rules to.
	get extends() {
		return this.__extends;
	}

	set extends(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field extends`);
		}
		this.__extends = new_value;
	}

	// If this is the default rule set to apply for thie source type, or this combination of types.
	get typeMode() {
		return this.__typeMode;
	}

	set typeMode(new_value) {
		this.__typeMode = new_value;
	}

	// Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
	get input() {
		return this.__input;
	}

	set input(new_value) {
		const StructureMapGroupInput = require('./StructureMapGroupInput');
		this.__input = Array.isArray(new_value)
			? new_value.map(val => new StructureMapGroupInput(val))
			: [new StructureMapGroupInput(new_value)];
	}

	// Transform Rule from source to target.
	get rule() {
		return this.__rule;
	}

	set rule(new_value) {
		const StructureMapGroupRule = require('./StructureMapGroupRule');
		this.__rule = Array.isArray(new_value)
			? new_value.map(val => new StructureMapGroupRule(val))
			: [new StructureMapGroupRule(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			extends: this.__extends,
			typeMode: this.__typeMode,
			documentation: this.__documentation,
			input: this.__input && this.__input.map(v => v.toJSON()),
			rule: this.__rule && this.__rule.map(v => v.toJSON()),
		});
	}
}

module.exports = StructureMapGroup;

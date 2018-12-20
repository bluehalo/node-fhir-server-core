const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class StructureMapGroupRuleTarget extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroupRuleTarget';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroupRuleTarget resource
	static get __resourceType() {
		return 'StructureMapGroupRuleTarget';
	}

	// Type or variable this rule applies to.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field context`);
		}
		this.__context = new_value;
	}

	// How to interpret the context.
	get contextType() {
		return this.__contextType;
	}

	set contextType(new_value) {
		this.__contextType = new_value;
	}

	// Field to create in the context.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		this.__element = new_value;
	}

	// Named context for field, if desired, and a field is specified.
	get variable() {
		return this.__variable;
	}

	set variable(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field variable`);
		}
		this.__variable = new_value;
	}

	// If field is a list, how to manage the list.
	get listMode() {
		return this.__listMode;
	}

	set listMode(new_value) {
		this.__listMode = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Internal rule reference for shared list items.
	get listRuleId() {
		return this.__listRuleId;
	}

	set listRuleId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field listRuleId`);
		}
		this.__listRuleId = new_value;
	}

	// How the data is copied / created.
	get transform() {
		return this.__transform;
	}

	set transform(new_value) {
		this.__transform = new_value;
	}

	// Parameters to the transform.
	get parameter() {
		return this.__parameter;
	}

	set parameter(new_value) {
		const StructureMapGroupRuleTargetParameter = require('./StructureMapGroupRuleTargetParameter');
		this.__parameter = Array.isArray(new_value)
			? new_value.map(val => new StructureMapGroupRuleTargetParameter(val))
			: [new StructureMapGroupRuleTargetParameter(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			context: this.__context,
			contextType: this.__contextType,
			element: this.__element,
			variable: this.__variable,
			listMode: this.__listMode,
			listRuleId: this.__listRuleId,
			transform: this.__transform,
			parameter: this.__parameter && this.__parameter.map(v => v.toJSON()),
		});
	}
}

module.exports = StructureMapGroupRuleTarget;

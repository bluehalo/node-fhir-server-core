const BackboneElement = require('./BackboneElement');
const StructureMap_Parameter = require('./StructureMap_Parameter');

class StructureMap_Target extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Target';
	}

	// Type or variable this rule applies to.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field context`);
		}
		this._context = new_value;
	}

	// How to interpret the context.
	get contextType () {
		return this._contextType;
	}

	set contextType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['type', 'variable'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field contextType`);
		}
		this._contextType = new_value;
	}

	// Field to create in the context.
	get element () {
		return this._element;
	}

	set element ( new_value ) {
		this._element = new_value;
	}

	// Named context for field, if desired, and a field is specified.
	get variable () {
		return this._variable;
	}

	set variable ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field variable`);
		}
		this._variable = new_value;
	}

	// If field is a list, how to manage the list.
	get listMode () {
		return this._listMode;
	}

	set listMode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['first', 'share', 'last', 'collate'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field listMode`);
		}
		this._listMode = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Internal rule reference for shared list items.
	get listRuleId () {
		return this._listRuleId;
	}

	set listRuleId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field listRuleId`);
		}
		this._listRuleId = new_value;
	}

	// How the data is copied / created.
	get transform () {
		return this._transform;
	}

	set transform ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['create', 'copy', 'truncate', 'escape', 'cast', 'append', 'translate', 'reference', 'dateOp', 'uuid', 'pointer', 'evaluate', 'cc', 'c', 'qty', 'id', 'cp'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field transform`);
		}
		this._transform = new_value;
	}

	// Parameters to the transform.
	get parameter () {
		return this._parameter;
	}

	set parameter ( new_value ) {
		this._parameter = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Parameter(val)) : [new StructureMap_Parameter(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			context: this._context,
			contextType: this._contextType,
			element: this._element,
			variable: this._variable,
			listMode: this._listMode,
			listRuleId: this._listRuleId,
			transform: this._transform,
			parameter: this._parameter
		});
	}

}

module.exports = StructureMap_Target;

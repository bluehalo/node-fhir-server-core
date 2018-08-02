const BackboneElement = require('./BackboneElement');
const StructureMap_Input = require('./StructureMap_Input');
const StructureMap_Rule = require('./StructureMap_Rule');

class StructureMap_Group extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Group';
	}

	// A unique name for the group for the convenience of human readers.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this._name = new_value;
	}

	// Another group that this group adds rules to.
	get extends () {
		return this._extends;
	}

	set extends ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field extends`);
		}
		this._extends = new_value;
	}

	// If this is the default rule set to apply for thie source type, or this combination of types.
	get typeMode () {
		return this._typeMode;
	}

	set typeMode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['none', 'types', 'type-and-types'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field typeMode`);
		}
		this._typeMode = new_value;
	}

	// Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	// A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
	get input () {
		return this._input;
	}

	set input ( new_value ) {
		this._input = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Input(val)) : [new StructureMap_Input(new_value)];
	}

	// Transform Rule from source to target.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Rule(val)) : [new StructureMap_Rule(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			extends: this._extends,
			typeMode: this._typeMode,
			documentation: this._documentation,
			input: this._input && this._input.map(v => v.toJSON()),
			rule: this._rule && this._rule.map(v => v.toJSON())
		});
	}

}

module.exports = StructureMap_Group;

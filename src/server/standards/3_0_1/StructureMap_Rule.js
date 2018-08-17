const BackboneElement = require('./BackboneElement');
const StructureMap_Source = require('./StructureMap_Source');
const StructureMap_Target = require('./StructureMap_Target');
const StructureMap_Dependent = require('./StructureMap_Dependent');

class StructureMap_Rule extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Rule';
	}

	// Name of the rule for internal references.
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

	// Source inputs to the mapping.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Source(val)) : [new StructureMap_Source(new_value)];
	}

	// Content to create because of this mapping rule.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Target(val)) : [new StructureMap_Target(new_value)];
	}

	// Rules contained in this rule.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Rule(val)) : [new StructureMap_Rule(new_value)];
	}

	// Which other rules to apply in the context of this rule.
	get dependent () {
		return this._dependent;
	}

	set dependent ( new_value ) {
		this._dependent = Array.isArray(new_value) ? new_value.map(val => new StructureMap_Dependent(val)) : [new StructureMap_Dependent(new_value)];
	}

	// Documentation for this instance of data.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			source: this._source && this._source.map(v => v.toJSON()),
			target: this._target && this._target.map(v => v.toJSON()),
			rule: this._rule && this._rule.map(v => v.toJSON()),
			dependent: this._dependent && this._dependent.map(v => v.toJSON()),
			documentation: this._documentation
		});
	}

}

module.exports = StructureMap_Rule;

const BackboneElement = require('./BackboneElement');
const ValueSet_Concept = require('./ValueSet_Concept');
const ValueSet_Filter = require('./ValueSet_Filter');

class ValueSet_Include extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Include';
	}

	// An absolute URI which is the code system from which the selected codes come from.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// The version of the code system that the codes are selected from.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// Specifies a concept to be included or excluded.
	get concept () {
		return this._concept;
	}

	set concept ( new_value ) {
		this._concept = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Concept(val)) : [new ValueSet_Concept(new_value)];
	}

	// Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
	get filter () {
		return this._filter;
	}

	set filter ( new_value ) {
		this._filter = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Filter(val)) : [new ValueSet_Filter(new_value)];
	}

	// Selects concepts found in this value set. This is an absolute URI that is a reference to ValueSet.url.
	get valueSet () {
		return this._valueSet;
	}

	set valueSet ( new_value ) {
		this._valueSet = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			system: this._system,
			version: this._version,
			concept: this._concept && this._concept.map(v => v.toJSON()),
			filter: this._filter && this._filter.map(v => v.toJSON()),
			valueSet: this._valueSet
		});
	}

}

module.exports = ValueSet_Include;

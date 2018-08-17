const BackboneElement = require('./BackboneElement');
const ValueSet_Parameter = require('./ValueSet_Parameter');
const ValueSet_Contains = require('./ValueSet_Contains');

class ValueSet_Expansion extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Expansion';
	}

	// An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new_value;
	}

	// The time at which the expansion was produced by the expanding system.
	get timestamp () {
		return this._timestamp;
	}

	set timestamp ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field timestamp`);
		}
		this._timestamp = new_value;
	}

	// The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
	get total () {
		return this._total;
	}

	set total ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field total`);
		}
		this._total = new_value;
	}

	// If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.
	get offset () {
		return this._offset;
	}

	set offset ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field offset`);
		}
		this._offset = new_value;
	}

	// A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
	get parameter () {
		return this._parameter;
	}

	set parameter ( new_value ) {
		this._parameter = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Parameter(val)) : [new ValueSet_Parameter(new_value)];
	}

	// The codes that are contained in the value set expansion.
	get contains () {
		return this._contains;
	}

	set contains ( new_value ) {
		this._contains = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Contains(val)) : [new ValueSet_Contains(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			timestamp: this._timestamp,
			total: this._total,
			offset: this._offset,
			parameter: this._parameter && this._parameter.map(v => v.toJSON()),
			contains: this._contains && this._contains.map(v => v.toJSON())
		});
	}

}

module.exports = ValueSet_Expansion;

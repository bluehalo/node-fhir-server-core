const Element = require('./Element');
const DataRequirement_CodeFilter = require('./DataRequirement_CodeFilter');
const DataRequirement_DateFilter = require('./DataRequirement_DateFilter');

class DataRequirement extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DataRequirement';
	}

	// The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// The profile of the required data, specified as the uri of the profile definition.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.
	get mustSupport () {
		return this._mustSupport;
	}

	set mustSupport ( new_value ) {
		this._mustSupport = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
	get codeFilter () {
		return this._codeFilter;
	}

	set codeFilter ( new_value ) {
		this._codeFilter = Array.isArray(new_value) ? new_value.map(val => new DataRequirement_CodeFilter(val)) : [new DataRequirement_CodeFilter(new_value)];
	}

	// Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
	get dateFilter () {
		return this._dateFilter;
	}

	set dateFilter ( new_value ) {
		this._dateFilter = Array.isArray(new_value) ? new_value.map(val => new DataRequirement_DateFilter(val)) : [new DataRequirement_DateFilter(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			profile: this._profile,
			mustSupport: this._mustSupport,
			codeFilter: this._codeFilter,
			dateFilter: this._dateFilter
		});
	}

}

module.exports = DataRequirement;

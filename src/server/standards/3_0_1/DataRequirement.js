const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');

class DataRequirement extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DataRequirement';
		Object.assign(this, opt);
	}

	// This is a DataRequirement resource
	static get __resourceType() {
		return 'DataRequirement';
	}

	// The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The profile of the required data, specified as the uri of the profile definition.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field profile`);
		}
		this.__profile = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.
	get mustSupport() {
		return this.__mustSupport;
	}

	set mustSupport(new_value) {
		this.__mustSupport = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
	get codeFilter() {
		return this.__codeFilter;
	}

	set codeFilter(new_value) {
		const DataRequirementCodeFilter = require('./DataRequirementCodeFilter');
		this.__codeFilter = Array.isArray(new_value)
			? new_value.map(val => new DataRequirementCodeFilter(val))
			: [new DataRequirementCodeFilter(new_value)];
	}

	// Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
	get dateFilter() {
		return this.__dateFilter;
	}

	set dateFilter(new_value) {
		const DataRequirementDateFilter = require('./DataRequirementDateFilter');
		this.__dateFilter = Array.isArray(new_value)
			? new_value.map(val => new DataRequirementDateFilter(val))
			: [new DataRequirementDateFilter(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			profile: this.__profile,
			mustSupport: this.__mustSupport,
			codeFilter: this.__codeFilter && this.__codeFilter.map(v => v.toJSON()),
			dateFilter: this.__dateFilter && this.__dateFilter.map(v => v.toJSON()),
		});
	}
}

module.exports = DataRequirement;

const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');

class ElementDefinitionType extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionType';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionType resource
	static get __resourceType() {
		return 'ElementDefinitionType';
	}

	// Name of Data type or Resource that is a(or the) type used for this element.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
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

	// If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
	get aggregation() {
		return this.__aggregation;
	}

	set aggregation(new_value) {
		this.__aggregation = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			profile: this.__profile,
			aggregation: this.__aggregation,
		});
	}
}

module.exports = ElementDefinitionType;

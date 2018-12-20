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

	// URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. \'string\' is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field profile`);
		}
		this.__profile = new_value;
	}

	// Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
	get targetProfile() {
		return this.__targetProfile;
	}

	set targetProfile(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field targetProfile`);
		}
		this.__targetProfile = new_value;
	}

	// If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
	get aggregation() {
		return this.__aggregation;
	}

	set aggregation(new_value) {
		this.__aggregation = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Whether this reference needs to be version specific or version independent, or whether either can be used.
	get versioning() {
		return this.__versioning;
	}

	set versioning(new_value) {
		this.__versioning = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			profile: this.__profile,
			targetProfile: this.__targetProfile,
			aggregation: this.__aggregation,
			versioning: this.__versioning,
		});
	}
}

module.exports = ElementDefinitionType;

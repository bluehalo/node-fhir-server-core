const BackboneElement = require('./BackboneElement');

class ElementDefinition_Type extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ElementDefinition_Type';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Type';
	}

	// URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new_value;
	}

	// Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new_value;
	}

	// Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
	get targetProfile () {
		return this._targetProfile;
	}

	set targetProfile ( new_value ) {
		this._targetProfile = new_value;
	}

	// If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
	get aggregation () {
		return this._aggregation;
	}

	set aggregation ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['contained', 'referenced', 'bundled'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field aggregation`);
		}
		this._aggregation = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Whether this reference needs to be version specific or version independent, or whether either can be used.
	get versioning () {
		return this._versioning;
	}

	set versioning ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['either', 'independent', 'specific'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field versioning`);
		}
		this._versioning = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this.code,
			profile: this.profile,
			targetProfile: this.targetProfile,
			aggregation: this.aggregation,
			versioning: this.versioning
		});
	}

}

module.exports = ElementDefinition_Type;

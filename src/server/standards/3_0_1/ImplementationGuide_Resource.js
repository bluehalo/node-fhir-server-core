const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class ImplementationGuide_Resource extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImplementationGuide_Resource';
	}

	// Whether a resource is included in the guide as part of the rules defined by the guide, or just as an example of a resource that conforms to the rules and/or help implementers understand the intent of the guide.
	get example () {
		return this._example;
	}

	set example ( new_value ) {
		this._example = new_value;
	}

	// A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A description of the reason that a resource has been included in the implementation guide.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A short code that may be used to identify the resource throughout the implementation guide.
	get acronym () {
		return this._acronym;
	}

	set acronym ( new_value ) {
		this._acronym = new_value;
	}

	// Where this resource is found.
	get sourceUri () {
		return this._sourceUri;
	}

	set sourceUri ( new_value ) {
		this._sourceUri = new_value;
	}

	// Where this resource is found.
	get sourceReference () {
		return this._sourceReference;
	}

	set sourceReference ( new_value ) {
		this._sourceReference = new Reference(new_value);
	}

	// Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.
	get exampleFor () {
		return this._exampleFor;
	}

	set exampleFor ( new_value ) {
		this._exampleFor = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			example: this._example,
			name: this._name,
			description: this._description,
			acronym: this._acronym,
			sourceUri: this._sourceUri,
			sourceReference: this._sourceReference && this._sourceReference.toJSON(),
			exampleFor: this._exampleFor && this._exampleFor.toJSON()
		});
	}

}

module.exports = ImplementationGuide_Resource;

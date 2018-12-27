const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ImplementationGuidePackageResource extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImplementationGuidePackageResource';
		Object.assign(this, opt);
	}

	// This is a ImplementationGuidePackageResource resource
	static get __resourceType() {
		return 'ImplementationGuidePackageResource';
	}

	// Why the resource is included in the guide.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A description of the reason that a resource has been included in the implementation guide.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A short code that may be used to identify the resource throughout the implementation guide.
	get acronym() {
		return this.__acronym;
	}

	set acronym(new_value) {
		this.__acronym = new_value;
	}

	// Where this resource is found.
	get sourceUri() {
		return this.__sourceUri;
	}

	set sourceUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sourceUri`);
		}
		this.__sourceUri = new_value;
	}

	// Where this resource is found.
	get sourceReference() {
		return this.__sourceReference;
	}

	set sourceReference(new_value) {
		const Reference = require('./Reference');
		this.__sourceReference = new Reference(new_value);
	}

	// Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.
	get exampleFor() {
		return this.__exampleFor;
	}

	set exampleFor(new_value) {
		const Reference = require('./Reference');
		this.__exampleFor = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			purpose: this.__purpose,
			name: this.__name,
			description: this.__description,
			acronym: this.__acronym,
			sourceUri: this.__sourceUri,
			sourceReference: this.__sourceReference && this.__sourceReference.toJSON(),
			exampleFor: this.__exampleFor && this.__exampleFor.toJSON(),
		});
	}
}

module.exports = ImplementationGuidePackageResource;

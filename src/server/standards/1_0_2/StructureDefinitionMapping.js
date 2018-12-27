const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class StructureDefinitionMapping extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureDefinitionMapping';
		Object.assign(this, opt);
	}

	// This is a StructureDefinitionMapping resource
	static get __resourceType() {
		return 'StructureDefinitionMapping';
	}

	// An Internal id that is used to identify this mapping set when specific mappings are made.
	get identity() {
		return this.__identity;
	}

	set identity(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field identity`);
		}
		this.__identity = new_value;
	}

	// An absolute URI that identifies the specification that this mapping is expressed to.
	get uri() {
		return this.__uri;
	}

	set uri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uri`);
		}
		this.__uri = new_value;
	}

	// A name for the specification that is being mapped to.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
	get comments() {
		return this.__comments;
	}

	set comments(new_value) {
		this.__comments = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identity: this.__identity,
			uri: this.__uri,
			name: this.__name,
			comments: this.__comments,
		});
	}
}

module.exports = StructureDefinitionMapping;

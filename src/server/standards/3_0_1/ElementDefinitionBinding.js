const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');

class ElementDefinitionBinding extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionBinding';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionBinding resource
	static get __resourceType() {
		return 'ElementDefinitionBinding';
	}

	// Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
	get strength() {
		return this.__strength;
	}

	set strength(new_value) {
		this.__strength = new_value;
	}

	// Describes the intended use of this particular set of codes.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.
	get valueSetUri() {
		return this.__valueSetUri;
	}

	set valueSetUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueSetUri`);
		}
		this.__valueSetUri = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.
	get valueSetReference() {
		return this.__valueSetReference;
	}

	set valueSetReference(new_value) {
		const Reference = require('./Reference');
		this.__valueSetReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			strength: this.__strength,
			description: this.__description,
			valueSetUri: this.__valueSetUri,
			valueSetReference: this.__valueSetReference && this.__valueSetReference.toJSON(),
		});
	}
}

module.exports = ElementDefinitionBinding;

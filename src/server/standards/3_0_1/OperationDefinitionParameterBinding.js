const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class OperationDefinitionParameterBinding extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OperationDefinitionParameterBinding';
		Object.assign(this, opt);
	}

	// This is a OperationDefinitionParameterBinding resource
	static get __resourceType() {
		return 'OperationDefinitionParameterBinding';
	}

	// Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
	get strength() {
		return this.__strength;
	}

	set strength(new_value) {
		this.__strength = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
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

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
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
			valueSetUri: this.__valueSetUri,
			valueSetReference: this.__valueSetReference && this.__valueSetReference.toJSON(),
		});
	}
}

module.exports = OperationDefinitionParameterBinding;

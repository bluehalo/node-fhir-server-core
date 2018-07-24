const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class ElementDefinition_Binding extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ElementDefinition_Binding';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Binding';
	}

	// Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
	get strength () {
		return this._strength;
	}

	set strength ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['required', 'extensible', 'preferred', 'example'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field strength`);
		}
		this._strength = new_value;
	}

	// Describes the intended use of this particular set of codes.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.
	get valueSetUri () {
		return this._valueSetUri;
	}

	set valueSetUri ( new_value ) {
		this._valueSetUri = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.
	get valueSetReference () {
		return this._valueSetReference;
	}

	set valueSetReference ( new_value ) {
		this._valueSetReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			strength: this._strength,
			description: this._description,
			valueSetUri: this._valueSetUri,
			valueSetReference: this._valueSetReference && this._valueSetReference.toJSON()
		});
	}

}

module.exports = ElementDefinition_Binding;

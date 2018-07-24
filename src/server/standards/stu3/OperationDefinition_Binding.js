const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class OperationDefinition_Binding extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'OperationDefinition_Binding';
	}

	// Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
	get strength () {
		return this._strength;
	}

	set strength ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['required', 'extensible', 'preferred', 'example'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field strength`);
		}
		this._strength = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
	get valueSetUri () {
		return this._valueSetUri;
	}

	set valueSetUri ( new_value ) {
		this._valueSetUri = new_value;
	}

	// Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
	get valueSetReference () {
		return this._valueSetReference;
	}

	set valueSetReference ( new_value ) {
		this._valueSetReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			strength: this._strength,
			valueSetUri: this._valueSetUri,
			valueSetReference: this._valueSetReference
		});
	}

}

module.exports = OperationDefinition_Binding;

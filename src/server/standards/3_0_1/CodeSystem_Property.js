const BackboneElement = require('./BackboneElement');

class CodeSystem_Property extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CodeSystem_Property';
	}

	// A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
	get uri () {
		return this._uri;
	}

	set uri ( new_value ) {
		this._uri = new_value;
	}

	// A description of the property- why it is defined, and how its value might be used.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to anotherr defined concept).
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['code', 'Coding', 'string', 'integer', 'boolean', 'dateTime'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			uri: this._uri,
			description: this._description,
			type: this._type
		});
	}

}

module.exports = CodeSystem_Property;

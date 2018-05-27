const BackboneElement = require('./BackboneElement');

class ElementDefinition_Discriminator extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ElementDefinition_Discriminator';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Discriminator';
	}

	// How the element value is interpreted when discrimination is evaluated.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['value', 'exists', 'pattern', 'type', 'profile'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// A FHIRPath expression, using a restricted subset of FHIRPath, that is used to identify the element on which discrimination is based.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			path: this.path
		});
	}

}

module.exports = ElementDefinition_Discriminator;

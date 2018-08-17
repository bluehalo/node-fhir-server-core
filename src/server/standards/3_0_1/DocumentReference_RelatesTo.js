const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class DocumentReference_RelatesTo extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentReference_RelatesTo';
	}

	// The type of relationship that this document has with anther document.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['replaces', 'transforms', 'signs', 'appends'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field code`);
		}
		this._code = new_value;
	}

	// The target document of this relationship.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			target: this._target && this._target.toJSON()
		});
	}

}

module.exports = DocumentReference_RelatesTo;

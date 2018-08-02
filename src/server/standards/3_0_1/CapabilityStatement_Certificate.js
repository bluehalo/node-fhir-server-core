const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Certificate extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Certificate';
	}

	// Mime type for a certificate.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// Actual certificate.
	get blob () {
		return this._blob;
	}

	set blob ( new_value ) {
		this._blob = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			blob: this._blob
		});
	}

}

module.exports = CapabilityStatement_Certificate;

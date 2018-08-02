const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Software extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Software';
	}

	// Name software is known by.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The version identifier for the software covered by this statement.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// Date this version of the software was released.
	get releaseDate () {
		return this._releaseDate;
	}

	set releaseDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field releaseDate`);
		}
		this._releaseDate = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			version: this._version,
			releaseDate: this._releaseDate
		});
	}

}

module.exports = CapabilityStatement_Software;

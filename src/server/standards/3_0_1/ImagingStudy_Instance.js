const BackboneElement = require('./BackboneElement');

class ImagingStudy_Instance extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingStudy_Instance';
	}

	// Formal identifier for this image or other content.
	get uid () {
		return this._uid;
	}

	set uid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field uid`);
		}
		this._uid = new_value;
	}

	// The number of instance in the series.
	get number () {
		return this._number;
	}

	set number ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this._number = new_value;
	}

	// DICOM instance  type.
	get sopClass () {
		return this._sopClass;
	}

	set sopClass ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sopClass`);
		}
		this._sopClass = new_value;
	}

	// The description of the instance.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			uid: this._uid,
			number: this._number,
			sopClass: this._sopClass,
			title: this._title
		});
	}

}

module.exports = ImagingStudy_Instance;

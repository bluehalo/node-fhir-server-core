const BackboneElement = require('./BackboneElement');

class ImagingManifest_Instance extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingManifest_Instance';
	}

	// SOP class UID of the selected instance.
	get sopClass () {
		return this._sopClass;
	}

	set sopClass ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sopClass`);
		}
		this._sopClass = new_value;
	}

	// SOP Instance UID of the selected instance.
	get uid () {
		return this._uid;
	}

	set uid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field uid`);
		}
		this._uid = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sopClass: this._sopClass,
			uid: this._uid
		});
	}

}

module.exports = ImagingManifest_Instance;

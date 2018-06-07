const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const ImagingManifest_Instance = require('./ImagingManifest_Instance');

class ImagingManifest_Series extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingManifest_Series';
	}

	// Series instance UID of the SOP instances in the selection.
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

	// The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identity and locating information of the selected DICOM SOP instances.
	get instance () {
		return this._instance;
	}

	set instance ( new_value ) {
		this._instance = Array.isArray(new_value) ? new_value.map(val => new ImagingManifest_Instance(val)) : [new ImagingManifest_Instance(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			uid: this._uid,
			endpoint: this._endpoint,
			instance: this._instance
		});
	}

}

module.exports = ImagingManifest_Series;

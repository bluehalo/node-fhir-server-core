const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const ImagingManifest_Series = require('./ImagingManifest_Series');

class ImagingManifest_Study extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingManifest_Study';
	}

	// Study instance UID of the SOP instances in the selection.
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

	// Reference to the Imaging Study in FHIR form.
	get imagingStudy () {
		return this._imagingStudy;
	}

	set imagingStudy ( new_value ) {
		this._imagingStudy = new Reference(new_value);
	}

	// The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Series identity and locating information of the DICOM SOP instances in the selection.
	get series () {
		return this._series;
	}

	set series ( new_value ) {
		this._series = Array.isArray(new_value) ? new_value.map(val => new ImagingManifest_Series(val)) : [new ImagingManifest_Series(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			uid: this._uid,
			imagingStudy: this._imagingStudy,
			endpoint: this._endpoint,
			series: this._series
		});
	}

}

module.exports = ImagingManifest_Study;

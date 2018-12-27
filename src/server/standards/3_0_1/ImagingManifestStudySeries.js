const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');

class ImagingManifestStudySeries extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingManifestStudySeries';
		Object.assign(this, opt);
	}

	// This is a ImagingManifestStudySeries resource
	static get __resourceType() {
		return 'ImagingManifestStudySeries';
	}

	// Series instance UID of the SOP instances in the selection.
	get uid() {
		return this.__uid;
	}

	set uid(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uid`);
		}
		this.__uid = new_value;
	}

	// The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identity and locating information of the selected DICOM SOP instances.
	get instance() {
		return this.__instance;
	}

	set instance(new_value) {
		const ImagingManifestStudySeriesInstance = require('./ImagingManifestStudySeriesInstance');
		this.__instance = Array.isArray(new_value)
			? new_value.map(val => new ImagingManifestStudySeriesInstance(val))
			: [new ImagingManifestStudySeriesInstance(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			uid: this.__uid,
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
			instance: this.__instance && this.__instance.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingManifestStudySeries;

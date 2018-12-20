const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');

class ImagingManifestStudy extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingManifestStudy';
		Object.assign(this, opt);
	}

	// This is a ImagingManifestStudy resource
	static get __resourceType() {
		return 'ImagingManifestStudy';
	}

	// Study instance UID of the SOP instances in the selection.
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

	// Reference to the Imaging Study in FHIR form.
	get imagingStudy() {
		return this.__imagingStudy;
	}

	set imagingStudy(new_value) {
		const Reference = require('./Reference');
		this.__imagingStudy = new Reference(new_value);
	}

	// The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Series identity and locating information of the DICOM SOP instances in the selection.
	get series() {
		return this.__series;
	}

	set series(new_value) {
		const ImagingManifestStudySeries = require('./ImagingManifestStudySeries');
		this.__series = Array.isArray(new_value)
			? new_value.map(val => new ImagingManifestStudySeries(val))
			: [new ImagingManifestStudySeries(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			uid: this.__uid,
			imagingStudy: this.__imagingStudy && this.__imagingStudy.toJSON(),
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
			series: this.__series && this.__series.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingManifestStudy;

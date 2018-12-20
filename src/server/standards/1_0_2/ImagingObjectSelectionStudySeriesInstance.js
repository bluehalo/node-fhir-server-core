const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class ImagingObjectSelectionStudySeriesInstance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingObjectSelectionStudySeriesInstance';
		Object.assign(this, opt);
	}

	// This is a ImagingObjectSelectionStudySeriesInstance resource
	static get __resourceType() {
		return 'ImagingObjectSelectionStudySeriesInstance';
	}

	// SOP class UID of the selected instance.
	get sopClass() {
		return this.__sopClass;
	}

	set sopClass(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sopClass`);
		}
		this.__sopClass = new_value;
	}

	// SOP Instance UID of the selected instance.
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

	// WADO-RS URL to retrieve the DICOM SOP Instance.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// Identity and location information of the frames in the selected instance.
	get frames() {
		return this.__frames;
	}

	set frames(new_value) {
		const ImagingObjectSelectionStudySeriesInstanceFrames = require('./ImagingObjectSelectionStudySeriesInstanceFrames');
		this.__frames = Array.isArray(new_value)
			? new_value.map(val => new ImagingObjectSelectionStudySeriesInstanceFrames(val))
			: [new ImagingObjectSelectionStudySeriesInstanceFrames(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sopClass: this.__sopClass,
			uid: this.__uid,
			url: this.__url,
			frames: this.__frames && this.__frames.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingObjectSelectionStudySeriesInstance;

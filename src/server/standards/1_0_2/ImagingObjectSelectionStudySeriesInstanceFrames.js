const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class ImagingObjectSelectionStudySeriesInstanceFrames extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingObjectSelectionStudySeriesInstanceFrames';
		Object.assign(this, opt);
	}

	// This is a ImagingObjectSelectionStudySeriesInstanceFrames resource
	static get __resourceType() {
		return 'ImagingObjectSelectionStudySeriesInstanceFrames';
	}

	// The frame numbers in the frame set.
	get frameNumbers() {
		return this.__frameNumbers;
	}

	set frameNumbers(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field frameNumbers`);
		}
		this.__frameNumbers = Array.isArray(new_value) ? new_value : [new_value];
	}

	// WADO-RS URL to retrieve the DICOM frames.
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

	toJSON() {
		return Object.assign(super.toJSON(), {
			frameNumbers: this.__frameNumbers,
			url: this.__url,
		});
	}
}

module.exports = ImagingObjectSelectionStudySeriesInstanceFrames;

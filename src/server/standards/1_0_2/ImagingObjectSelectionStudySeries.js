const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class ImagingObjectSelectionStudySeries extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingObjectSelectionStudySeries';
		Object.assign(this, opt);
	}

	// This is a ImagingObjectSelectionStudySeries resource
	static get __resourceType() {
		return 'ImagingObjectSelectionStudySeries';
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

	// WADO-RS URL to retrieve the series. Note that this URL retrieves all SOP instances of the series not only those in the selection.
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

	// Identity and locating information of the selected DICOM SOP instances.
	get instance() {
		return this.__instance;
	}

	set instance(new_value) {
		const ImagingObjectSelectionStudySeriesInstance = require('./ImagingObjectSelectionStudySeriesInstance');
		this.__instance = Array.isArray(new_value)
			? new_value.map(val => new ImagingObjectSelectionStudySeriesInstance(val))
			: [new ImagingObjectSelectionStudySeriesInstance(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			uid: this.__uid,
			url: this.__url,
			instance: this.__instance && this.__instance.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingObjectSelectionStudySeries;

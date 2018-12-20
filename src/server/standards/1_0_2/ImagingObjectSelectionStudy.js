const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class ImagingObjectSelectionStudy extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingObjectSelectionStudy';
		Object.assign(this, opt);
	}

	// This is a ImagingObjectSelectionStudy resource
	static get __resourceType() {
		return 'ImagingObjectSelectionStudy';
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

	// WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.
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

	// Reference to the Imaging Study in FHIR form.
	get imagingStudy() {
		return this.__imagingStudy;
	}

	set imagingStudy(new_value) {
		const Reference = require('./Reference');
		this.__imagingStudy = new Reference(new_value);
	}

	// Series identity and locating information of the DICOM SOP instances in the selection.
	get series() {
		return this.__series;
	}

	set series(new_value) {
		const ImagingObjectSelectionStudySeries = require('./ImagingObjectSelectionStudySeries');
		this.__series = Array.isArray(new_value)
			? new_value.map(val => new ImagingObjectSelectionStudySeries(val))
			: [new ImagingObjectSelectionStudySeries(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			uid: this.__uid,
			url: this.__url,
			imagingStudy: this.__imagingStudy && this.__imagingStudy.toJSON(),
			series: this.__series && this.__series.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingObjectSelectionStudy;

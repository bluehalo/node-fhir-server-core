const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const OidScalar = require('./scalars/Oid.scalar');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ImagingStudySeries extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingStudySeries';
		Object.assign(this, opt);
	}

	// This is a ImagingStudySeries resource
	static get __resourceType() {
		return 'ImagingStudySeries';
	}

	// The Numeric identifier of this series in the study.
	get number() {
		return this.__number;
	}

	set number(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this.__number = new_value;
	}

	// The modality of this series sequence.
	get modality() {
		return this.__modality;
	}

	set modality(new_value) {
		const Coding = require('./Coding');
		this.__modality = new Coding(new_value);
	}

	// Formal identifier for this series.
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

	// A description of the series.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Number of SOP Instances in Series.
	get numberOfInstances() {
		return this.__numberOfInstances;
	}

	set numberOfInstances(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field numberOfInstances`);
		}
		this.__numberOfInstances = new_value;
	}

	// Availability of series (online, offline or nearline).
	get availability() {
		return this.__availability;
	}

	set availability(new_value) {
		this.__availability = new_value;
	}

	// URI/URL specifying the location of the referenced series using WADO-RS.
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

	// Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const Coding = require('./Coding');
		this.__bodySite = new Coding(new_value);
	}

	// Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.
	get laterality() {
		return this.__laterality;
	}

	set laterality(new_value) {
		const Coding = require('./Coding');
		this.__laterality = new Coding(new_value);
	}

	// The date and time the series was started.
	get started() {
		return this.__started;
	}

	set started(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field started`);
		}
		this.__started = new_value;
	}

	// A single SOP Instance within the series, e.g. an image, or presentation state.
	get instance() {
		return this.__instance;
	}

	set instance(new_value) {
		const ImagingStudySeriesInstance = require('./ImagingStudySeriesInstance');
		this.__instance = Array.isArray(new_value)
			? new_value.map(val => new ImagingStudySeriesInstance(val))
			: [new ImagingStudySeriesInstance(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			number: this.__number,
			modality: this.__modality && this.__modality.toJSON(),
			uid: this.__uid,
			description: this.__description,
			numberOfInstances: this.__numberOfInstances,
			availability: this.__availability,
			url: this.__url,
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			laterality: this.__laterality && this.__laterality.toJSON(),
			started: this.__started,
			instance: this.__instance && this.__instance.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingStudySeries;

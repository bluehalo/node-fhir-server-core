const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
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

	// The numeric identifier of this series in the study.
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

	// A description of the series.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
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

	// The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const Coding = require('./Coding');
		this.__bodySite = new Coding(new_value);
	}

	// The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
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

	// The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A single SOP instance within the series, e.g. an image, or presentation state.
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
			uid: this.__uid,
			number: this.__number,
			modality: this.__modality && this.__modality.toJSON(),
			description: this.__description,
			numberOfInstances: this.__numberOfInstances,
			availability: this.__availability,
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			laterality: this.__laterality && this.__laterality.toJSON(),
			started: this.__started,
			performer: this.__performer && this.__performer.map(v => v.toJSON()),
			instance: this.__instance && this.__instance.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingStudySeries;

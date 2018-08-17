const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');
const Reference = require('./Reference');
const ImagingStudy_Instance = require('./ImagingStudy_Instance');

class ImagingStudy_Series extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingStudy_Series';
	}

	// Formal identifier for this series.
	get uid () {
		return this._uid;
	}

	set uid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field uid`);
		}
		this._uid = new_value;
	}

	// The numeric identifier of this series in the study.
	get number () {
		return this._number;
	}

	set number ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this._number = new_value;
	}

	// The modality of this series sequence.
	get modality () {
		return this._modality;
	}

	set modality ( new_value ) {
		this._modality = new Coding(new_value);
	}

	// A description of the series.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
	get numberOfInstances () {
		return this._numberOfInstances;
	}

	set numberOfInstances ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field numberOfInstances`);
		}
		this._numberOfInstances = new_value;
	}

	// Availability of series (online, offline or nearline).
	get availability () {
		return this._availability;
	}

	set availability ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ONLINE', 'OFFLINE', 'NEARLINE', 'UNAVAILABLE'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field availability`);
		}
		this._availability = new_value;
	}

	// The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = new Coding(new_value);
	}

	// The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
	get laterality () {
		return this._laterality;
	}

	set laterality ( new_value ) {
		this._laterality = new Coding(new_value);
	}

	// The date and time the series was started.
	get started () {
		return this._started;
	}

	set started ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field started`);
		}
		this._started = new_value;
	}

	// The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A single SOP instance within the series, e.g. an image, or presentation state.
	get instance () {
		return this._instance;
	}

	set instance ( new_value ) {
		this._instance = Array.isArray(new_value) ? new_value.map(val => new ImagingStudy_Instance(val)) : [new ImagingStudy_Instance(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			uid: this._uid,
			number: this._number,
			modality: this._modality && this._modality.toJSON(),
			description: this._description,
			numberOfInstances: this._numberOfInstances,
			availability: this._availability,
			endpoint: this._endpoint && this._endpoint.map(v => v.toJSON()),
			bodySite: this._bodySite && this._bodySite.toJSON(),
			laterality: this._laterality && this._laterality.toJSON(),
			started: this._started,
			performer: this._performer && this._performer.map(v => v.toJSON()),
			instance: this._instance && this._instance.map(v => v.toJSON())
		});
	}

}

module.exports = ImagingStudy_Series;

const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Coding = require('./Coding');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const ImagingStudy_Series = require('./ImagingStudy_Series');

class ImagingStudy extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImagingStudy';
	}

	// This is a ImagingStudy resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ImagingStudy'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Formal identifier for the study.
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

	// Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
	get accession () {
		return this._accession;
	}

	set accession ( new_value ) {
		this._accession = new Identifier(new_value);
	}

	// Other identifiers for the study.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Availability of study (online, offline, or nearline).
	get availability () {
		return this._availability;
	}

	set availability ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ONLINE', 'OFFLINE', 'NEARLINE', 'UNAVAILABLE'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field availability`);
		}
		this._availability = new_value;
	}

	// A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
	get modalityList () {
		return this._modalityList;
	}

	set modalityList ( new_value ) {
		this._modalityList = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The patient imaged in the study.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The encounter or episode at which the request is initiated.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Date and time the study started.
	get started () {
		return this._started;
	}

	set started ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field started`);
		}
		this._started = new_value;
	}

	// A list of the diagnostic requests that resulted in this imaging study being performed.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The requesting/referring physician.
	get referrer () {
		return this._referrer;
	}

	set referrer ( new_value ) {
		this._referrer = new Reference(new_value);
	}

	// Who read the study and interpreted the images or other content.
	get interpreter () {
		return this._interpreter;
	}

	set interpreter ( new_value ) {
		this._interpreter = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
	get numberOfSeries () {
		return this._numberOfSeries;
	}

	set numberOfSeries ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field numberOfSeries`);
		}
		this._numberOfSeries = new_value;
	}

	// Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
	get numberOfInstances () {
		return this._numberOfInstances;
	}

	set numberOfInstances ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field numberOfInstances`);
		}
		this._numberOfInstances = new_value;
	}

	// A reference to the performed Procedure.
	get procedureReference () {
		return this._procedureReference;
	}

	set procedureReference ( new_value ) {
		this._procedureReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The code for the performed procedure type.
	get procedureCode () {
		return this._procedureCode;
	}

	set procedureCode ( new_value ) {
		this._procedureCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Description of clinical condition indicating why the ImagingStudy was requested.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new CodeableConcept(new_value);
	}

	// Institution-generated description or classification of the Study performed.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Each study has one or more series of images or other content.
	get series () {
		return this._series;
	}

	set series ( new_value ) {
		this._series = Array.isArray(new_value) ? new_value.map(val => new ImagingStudy_Series(val)) : [new ImagingStudy_Series(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			uid: this._uid,
			accession: this._accession,
			identifier: this._identifier,
			availability: this._availability,
			modalityList: this._modalityList,
			patient: this._patient,
			context: this._context,
			started: this._started,
			basedOn: this._basedOn,
			referrer: this._referrer,
			interpreter: this._interpreter,
			endpoint: this._endpoint,
			numberOfSeries: this._numberOfSeries,
			numberOfInstances: this._numberOfInstances,
			procedureReference: this._procedureReference,
			procedureCode: this._procedureCode,
			reason: this._reason,
			description: this._description,
			series: this._series
		});
	}

}

module.exports = ImagingStudy;

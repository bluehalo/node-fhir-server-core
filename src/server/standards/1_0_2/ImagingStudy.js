const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const OidScalar = require('./scalars/Oid.scalar');
const UriScalar = require('./scalars/Uri.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class ImagingStudy extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingStudy';
		Object.assign(this, opt);
	}

	// This is a ImagingStudy resource
	static get __resourceType() {
		return 'ImagingStudy';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ImagingStudy = new_value;
	}

	// Date and Time the study started.
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

	// The patient imaged in the study.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Formal identifier for the study.
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

	// Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
	get accession() {
		return this.__accession;
	}

	set accession(new_value) {
		const Identifier = require('./Identifier');
		this.__accession = new Identifier(new_value);
	}

	// Other identifiers for the study.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A list of the diagnostic orders that resulted in this imaging study being performed.
	get order() {
		return this.__order;
	}

	set order(new_value) {
		const Reference = require('./Reference');
		this.__order = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
	get modalityList() {
		return this.__modalityList;
	}

	set modalityList(new_value) {
		const Coding = require('./Coding');
		this.__modalityList = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The requesting/referring physician.
	get referrer() {
		return this.__referrer;
	}

	set referrer(new_value) {
		const Reference = require('./Reference');
		this.__referrer = new Reference(new_value);
	}

	// Availability of study (online, offline or nearline).
	get availability() {
		return this.__availability;
	}

	set availability(new_value) {
		this.__availability = new_value;
	}

	// WADO-RS resource where Study is available.
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

	// Number of Series in Study.
	get numberOfSeries() {
		return this.__numberOfSeries;
	}

	set numberOfSeries(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field numberOfSeries`);
		}
		this.__numberOfSeries = new_value;
	}

	// Number of SOP Instances in Study.
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

	// Type of procedure performed.
	get procedure() {
		return this.__procedure;
	}

	set procedure(new_value) {
		const Reference = require('./Reference');
		this.__procedure = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Who read the study and interpreted the images or other content.
	get interpreter() {
		return this.__interpreter;
	}

	set interpreter(new_value) {
		const Reference = require('./Reference');
		this.__interpreter = new Reference(new_value);
	}

	// Institution-generated description or classification of the Study performed.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Each study has one or more series of images or other content.
	get series() {
		return this.__series;
	}

	set series(new_value) {
		const ImagingStudySeries = require('./ImagingStudySeries');
		this.__series = Array.isArray(new_value)
			? new_value.map(val => new ImagingStudySeries(val))
			: [new ImagingStudySeries(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			started: this.__started,
			patient: this.__patient && this.__patient.toJSON(),
			uid: this.__uid,
			accession: this.__accession && this.__accession.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			order: this.__order && this.__order.map(v => v.toJSON()),
			modalityList: this.__modalityList && this.__modalityList.map(v => v.toJSON()),
			referrer: this.__referrer && this.__referrer.toJSON(),
			availability: this.__availability,
			url: this.__url,
			numberOfSeries: this.__numberOfSeries,
			numberOfInstances: this.__numberOfInstances,
			procedure: this.__procedure && this.__procedure.map(v => v.toJSON()),
			interpreter: this.__interpreter && this.__interpreter.toJSON(),
			description: this.__description,
			series: this.__series && this.__series.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingStudy;

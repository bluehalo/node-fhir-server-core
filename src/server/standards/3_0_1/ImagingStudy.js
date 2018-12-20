const DomainResource = require('./DomainResource');
const OidScalar = require('./scalars/Oid.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
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

	// Availability of study (online, offline, or nearline).
	get availability() {
		return this.__availability;
	}

	set availability(new_value) {
		this.__availability = new_value;
	}

	// A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
	get modalityList() {
		return this.__modalityList;
	}

	set modalityList(new_value) {
		const Coding = require('./Coding');
		this.__modalityList = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The patient imaged in the study.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The encounter or episode at which the request is initiated.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Date and time the study started.
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

	// A list of the diagnostic requests that resulted in this imaging study being performed.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The requesting/referring physician.
	get referrer() {
		return this.__referrer;
	}

	set referrer(new_value) {
		const Reference = require('./Reference');
		this.__referrer = new Reference(new_value);
	}

	// Who read the study and interpreted the images or other content.
	get interpreter() {
		return this.__interpreter;
	}

	set interpreter(new_value) {
		const Reference = require('./Reference');
		this.__interpreter = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
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

	// Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
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

	// A reference to the performed Procedure.
	get procedureReference() {
		return this.__procedureReference;
	}

	set procedureReference(new_value) {
		const Reference = require('./Reference');
		this.__procedureReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The code for the performed procedure type.
	get procedureCode() {
		return this.__procedureCode;
	}

	set procedureCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__procedureCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Description of clinical condition indicating why the ImagingStudy was requested.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
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
			uid: this.__uid,
			accession: this.__accession && this.__accession.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			availability: this.__availability,
			modalityList: this.__modalityList && this.__modalityList.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			context: this.__context && this.__context.toJSON(),
			started: this.__started,
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			referrer: this.__referrer && this.__referrer.toJSON(),
			interpreter: this.__interpreter && this.__interpreter.map(v => v.toJSON()),
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
			numberOfSeries: this.__numberOfSeries,
			numberOfInstances: this.__numberOfInstances,
			procedureReference: this.__procedureReference && this.__procedureReference.map(v => v.toJSON()),
			procedureCode: this.__procedureCode && this.__procedureCode.map(v => v.toJSON()),
			reason: this.__reason && this.__reason.toJSON(),
			description: this.__description,
			series: this.__series && this.__series.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingStudy;

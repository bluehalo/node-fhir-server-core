const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const DiagnosticReport_Performer = require('./DiagnosticReport_Performer');
const DiagnosticReport_Image = require('./DiagnosticReport_Image');
const Attachment = require('./Attachment');

class DiagnosticReport extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DiagnosticReport';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DiagnosticReport';
	}

	// This is a DiagnosticReport resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['DiagnosticReport'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this report by the performer or other systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Details concerning a test or procedure requested.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the diagnostic report as a whole.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['registered', 'partial', 'preliminary', 'final', 'amended', 'corrected', 'appended', 'cancelled', 'entered-in-error', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._category = new CodeableConcept(new_value);
	}

	// A code or name that describes this diagnostic report.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = new CodeableConcept(new_value);
	}

	// The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._subject = new Reference(new_value);
	}

	// The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport per is about.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._context = new Reference(new_value);
	}

	// The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
	get effectiveDateTime () {
		return this._effectiveDateTime;
	}

	set effectiveDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this._effectiveDateTime = new_value;
	}

	// The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._effectivePeriod = new Period(new_value);
	}

	// The date and time that this version of the report was released from the source diagnostic service.
	get issued () {
		return this._issued;
	}

	set issued ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._issued = new_value;
	}

	// Indicates who or what participated in producing the report.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._performer = Array.isArray(new_value) ? new_value.map(val => new DiagnosticReport_Performer(val)) : [new DiagnosticReport_Performer(new_value)];
	}

	// Details about the specimens on which this diagnostic report is based.
	get specimen () {
		return this._specimen;
	}

	set specimen ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._specimen = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
	get result () {
		return this._result;
	}

	set result ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._result = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
	get imagingStudy () {
		return this._imagingStudy;
	}

	set imagingStudy ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._imagingStudy = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
	get image () {
		return this._image;
	}

	set image ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._image = Array.isArray(new_value) ? new_value.map(val => new DiagnosticReport_Image(val)) : [new DiagnosticReport_Image(new_value)];
	}

	// Concise and clinically contextualized impression / summary of the diagnostic report.
	get conclusion () {
		return this._conclusion;
	}

	set conclusion ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._conclusion = new_value;
	}

	// Codes for the conclusion.
	get codedDiagnosis () {
		return this._codedDiagnosis;
	}

	set codedDiagnosis ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._codedDiagnosis = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
	get presentedForm () {
		return this._presentedForm;
	}

	set presentedForm ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._presentedForm = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			status: this.status,
			category: this.category && this.category.toJSON(),
			code: this.code && this.code.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			context: this.context && this.context.toJSON(),
			effectiveDateTime: this.effectiveDateTime,
			effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
			issued: this.issued,
			performer: this.performer && this.performer.map(v => v.toJSON()),
			specimen: this.specimen && this.specimen.map(v => v.toJSON()),
			result: this.result && this.result.map(v => v.toJSON()),
			imagingStudy: this.imagingStudy && this.imagingStudy.map(v => v.toJSON()),
			image: this.image && this.image.map(v => v.toJSON()),
			conclusion: this.conclusion,
			codedDiagnosis: this.codedDiagnosis && this.codedDiagnosis.map(v => v.toJSON()),
			presentedForm: this.presentedForm && this.presentedForm.map(v => v.toJSON())
		});
	}

}

module.exports = DiagnosticReport;

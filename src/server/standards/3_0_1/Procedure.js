const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Procedure extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Procedure';
		Object.assign(this, opt);
	}

	// This is a Procedure resource
	static get __resourceType() {
		return 'Procedure';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Procedure = new_value;
	}

	// This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A reference to a resource that contains details of the request for this procedure.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular procedure is a component or step.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code specifying the state of the procedure. Generally this will be in-progress or completed state.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Set this to true if the record is saying that the procedure was NOT performed.
	get notDone() {
		return this.__notDone;
	}

	set notDone(new_value) {
		this.__notDone = new_value;
	}

	// A code indicating why the procedure was not performed.
	get notDoneReason() {
		return this.__notDoneReason;
	}

	set notDoneReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__notDoneReason = new CodeableConcept(new_value);
	}

	// A code that classifies the procedure for searching, sorting and display purposes (e.g. \'Surgical Procedure\').
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. \'Laparoscopic Appendectomy\').
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The person, animal or group on which the procedure was performed.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The encounter during which the procedure was performed.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
	get performedDateTime() {
		return this.__performedDateTime;
	}

	set performedDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field performedDateTime`);
		}
		this.__performedDateTime = new_value;
	}

	// The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
	get performedPeriod() {
		return this.__performedPeriod;
	}

	set performedPeriod(new_value) {
		const Period = require('./Period');
		this.__performedPeriod = new Period(new_value);
	}

	// Limited to \'real\' people rather than equipment.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const ProcedurePerformer = require('./ProcedurePerformer');
		this.__performer = Array.isArray(new_value)
			? new_value.map(val => new ProcedurePerformer(val))
			: [new ProcedurePerformer(new_value)];
	}

	// The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The condition that is the reason why the procedure was performed.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The outcome of the procedure - did it resolve reasons for the procedure being performed?.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// This could be a histology result, pathology report, surgical report, etc..
	get report() {
		return this.__report;
	}

	set report(new_value) {
		const Reference = require('./Reference');
		this.__report = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any \'post procedure\' issues.
	get complication() {
		return this.__complication;
	}

	set complication(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__complication = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Any complications that occurred during the procedure, or in the immediate post-performance period.
	get complicationDetail() {
		return this.__complicationDetail;
	}

	set complicationDetail(new_value) {
		const Reference = require('./Reference');
		this.__complicationDetail = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
	get followUp() {
		return this.__followUp;
	}

	set followUp(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__followUp = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Any other notes about the procedure.  E.g. the operative notes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
	get focalDevice() {
		return this.__focalDevice;
	}

	set focalDevice(new_value) {
		const ProcedureFocalDevice = require('./ProcedureFocalDevice');
		this.__focalDevice = Array.isArray(new_value)
			? new_value.map(val => new ProcedureFocalDevice(val))
			: [new ProcedureFocalDevice(new_value)];
	}

	// Identifies medications, devices and any other substance used as part of the procedure.
	get usedReference() {
		return this.__usedReference;
	}

	set usedReference(new_value) {
		const Reference = require('./Reference');
		this.__usedReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Identifies coded items that were used as part of the procedure.
	get usedCode() {
		return this.__usedCode;
	}

	set usedCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__usedCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			notDone: this.__notDone,
			notDoneReason: this.__notDoneReason && this.__notDoneReason.toJSON(),
			category: this.__category && this.__category.toJSON(),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			performedDateTime: this.__performedDateTime,
			performedPeriod: this.__performedPeriod && this.__performedPeriod.toJSON(),
			performer: this.__performer && this.__performer.map(v => v.toJSON()),
			location: this.__location && this.__location.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.map(v => v.toJSON()),
			outcome: this.__outcome && this.__outcome.toJSON(),
			report: this.__report && this.__report.map(v => v.toJSON()),
			complication: this.__complication && this.__complication.map(v => v.toJSON()),
			complicationDetail: this.__complicationDetail && this.__complicationDetail.map(v => v.toJSON()),
			followUp: this.__followUp && this.__followUp.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			focalDevice: this.__focalDevice && this.__focalDevice.map(v => v.toJSON()),
			usedReference: this.__usedReference && this.__usedReference.map(v => v.toJSON()),
			usedCode: this.__usedCode && this.__usedCode.map(v => v.toJSON()),
		});
	}
}

module.exports = Procedure;

const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Condition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Condition';
		Object.assign(this, opt);
	}

	// This is a Condition resource
	static get __resourceType() {
		return 'Condition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Condition = new_value;
	}

	// This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Indicates the patient who the condition record is associated with.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Encounter during which the condition was first asserted.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// Individual who is making the condition statement.
	get asserter() {
		return this.__asserter;
	}

	set asserter(new_value) {
		const Reference = require('./Reference');
		this.__asserter = new Reference(new_value);
	}

	// A date, when  the Condition statement was documented.
	get dateRecorded() {
		return this.__dateRecorded;
	}

	set dateRecorded(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateRecorded`);
		}
		this.__dateRecorded = new_value;
	}

	// Identification of the condition, problem or diagnosis.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A category assigned to the condition.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// The clinical status of the condition.
	get clinicalStatus() {
		return this.__clinicalStatus;
	}

	set clinicalStatus(new_value) {
		this.__clinicalStatus = new_value;
	}

	// The verification status to support the clinical status of the condition.
	get verificationStatus() {
		return this.__verificationStatus;
	}

	set verificationStatus(new_value) {
		this.__verificationStatus = new_value;
	}

	// A subjective assessment of the severity of the condition as evaluated by the clinician.
	get severity() {
		return this.__severity;
	}

	set severity(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__severity = new CodeableConcept(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetDateTime() {
		return this.__onsetDateTime;
	}

	set onsetDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field onsetDateTime`);
		}
		this.__onsetDateTime = new_value;
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetQuantity() {
		return this.__onsetQuantity;
	}

	set onsetQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__onsetQuantity = new Quantity(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetPeriod() {
		return this.__onsetPeriod;
	}

	set onsetPeriod(new_value) {
		const Period = require('./Period');
		this.__onsetPeriod = new Period(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetRange() {
		return this.__onsetRange;
	}

	set onsetRange(new_value) {
		const Range = require('./Range');
		this.__onsetRange = new Range(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetString() {
		return this.__onsetString;
	}

	set onsetString(new_value) {
		this.__onsetString = new_value;
	}

	// The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.
	get abatementDateTime() {
		return this.__abatementDateTime;
	}

	set abatementDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field abatementDateTime`);
		}
		this.__abatementDateTime = new_value;
	}

	// The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.
	get abatementQuantity() {
		return this.__abatementQuantity;
	}

	set abatementQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__abatementQuantity = new Quantity(new_value);
	}

	// The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.
	get abatementBoolean() {
		return this.__abatementBoolean;
	}

	set abatementBoolean(new_value) {
		this.__abatementBoolean = new_value;
	}

	// The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.
	get abatementPeriod() {
		return this.__abatementPeriod;
	}

	set abatementPeriod(new_value) {
		const Period = require('./Period');
		this.__abatementPeriod = new Period(new_value);
	}

	// The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.
	get abatementRange() {
		return this.__abatementRange;
	}

	set abatementRange(new_value) {
		const Range = require('./Range');
		this.__abatementRange = new Range(new_value);
	}

	// The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.
	get abatementString() {
		return this.__abatementString;
	}

	set abatementString(new_value) {
		this.__abatementString = new_value;
	}

	// Clinical stage or grade of a condition. May include formal severity assessments.
	get stage() {
		return this.__stage;
	}

	set stage(new_value) {
		const ConditionStage = require('./ConditionStage');
		this.__stage = new ConditionStage(new_value);
	}

	// Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
	get evidence() {
		return this.__evidence;
	}

	set evidence(new_value) {
		const ConditionEvidence = require('./ConditionEvidence');
		this.__evidence = Array.isArray(new_value)
			? new_value.map(val => new ConditionEvidence(val))
			: [new ConditionEvidence(new_value)];
	}

	// The anatomical location where this condition manifests itself.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
	get notes() {
		return this.__notes;
	}

	set notes(new_value) {
		this.__notes = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			asserter: this.__asserter && this.__asserter.toJSON(),
			dateRecorded: this.__dateRecorded,
			code: this.__code && this.__code.toJSON(),
			category: this.__category && this.__category.toJSON(),
			clinicalStatus: this.__clinicalStatus,
			verificationStatus: this.__verificationStatus,
			severity: this.__severity && this.__severity.toJSON(),
			onsetDateTime: this.__onsetDateTime,
			onsetQuantity: this.__onsetQuantity && this.__onsetQuantity.toJSON(),
			onsetPeriod: this.__onsetPeriod && this.__onsetPeriod.toJSON(),
			onsetRange: this.__onsetRange && this.__onsetRange.toJSON(),
			onsetString: this.__onsetString,
			abatementDateTime: this.__abatementDateTime,
			abatementQuantity: this.__abatementQuantity && this.__abatementQuantity.toJSON(),
			abatementBoolean: this.__abatementBoolean,
			abatementPeriod: this.__abatementPeriod && this.__abatementPeriod.toJSON(),
			abatementRange: this.__abatementRange && this.__abatementRange.toJSON(),
			abatementString: this.__abatementString,
			stage: this.__stage && this.__stage.toJSON(),
			evidence: this.__evidence && this.__evidence.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.map(v => v.toJSON()),
			notes: this.__notes,
		});
	}
}

module.exports = Condition;

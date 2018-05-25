const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Age = require('./Age');
const Period = require('./Period');
const Range = require('./Range');
const Condition_Stage = require('./Condition_Stage');
const Condition_Evidence = require('./Condition_Evidence');
const Annotation = require('./Annotation');

class Condition extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Condition';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Condition';
	}

	// This is a Condition resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['Condition'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
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

	// The clinical status of the condition.
	get clinicalStatus () {
		return this._clinicalStatus;
	}

	set clinicalStatus ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'recurrence', 'inactive', 'remission', 'resolved'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field clinicalStatus`);
		}
		this._clinicalStatus = new_value;
	}

	// The verification status to support the clinical status of the condition.
	get verificationStatus () {
		return this._verificationStatus;
	}

	set verificationStatus ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['provisional', 'differential', 'confirmed', 'refuted', 'entered-in-error', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field verificationStatus`);
		}
		this._verificationStatus = new_value;
	}

	// A category assigned to the condition.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A subjective assessment of the severity of the condition as evaluated by the clinician.
	get severity () {
		return this._severity;
	}

	set severity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._severity = new CodeableConcept(new_value);
	}

	// Identification of the condition, problem or diagnosis.
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

	// The anatomical location where this condition manifests itself.
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._bodySite = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates the patient or group who the condition record is associated with.
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

	// Encounter during which the condition was first asserted.
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

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetDateTime () {
		return this._onsetDateTime;
	}

	set onsetDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field onsetDateTime`);
		}
		this._onsetDateTime = new_value;
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetAge () {
		return this._onsetAge;
	}

	set onsetAge ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onsetAge = new Age(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetPeriod () {
		return this._onsetPeriod;
	}

	set onsetPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onsetPeriod = new Period(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetRange () {
		return this._onsetRange;
	}

	set onsetRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onsetRange = new Range(new_value);
	}

	// Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
	get onsetString () {
		return this._onsetString;
	}

	set onsetString ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onsetString = new_value;
	}

	// The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
	get abatementDateTime () {
		return this._abatementDateTime;
	}

	set abatementDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field abatementDateTime`);
		}
		this._abatementDateTime = new_value;
	}

	// The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
	get abatementAge () {
		return this._abatementAge;
	}

	set abatementAge ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._abatementAge = new Age(new_value);
	}

	// The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
	get abatementBoolean () {
		return this._abatementBoolean;
	}

	set abatementBoolean ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._abatementBoolean = new_value;
	}

	// The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
	get abatementPeriod () {
		return this._abatementPeriod;
	}

	set abatementPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._abatementPeriod = new Period(new_value);
	}

	// The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
	get abatementRange () {
		return this._abatementRange;
	}

	set abatementRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._abatementRange = new Range(new_value);
	}

	// The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
	get abatementString () {
		return this._abatementString;
	}

	set abatementString ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._abatementString = new_value;
	}

	// The date on which the existance of the Condition was first asserted or acknowledged.
	get assertedDate () {
		return this._assertedDate;
	}

	set assertedDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field assertedDate`);
		}
		this._assertedDate = new_value;
	}

	// Individual who is making the condition statement.
	get asserter () {
		return this._asserter;
	}

	set asserter ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._asserter = new Reference(new_value);
	}

	// Clinical stage or grade of a condition. May include formal severity assessments.
	get stage () {
		return this._stage;
	}

	set stage ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._stage = new Condition_Stage(new_value);
	}

	// Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
	get evidence () {
		return this._evidence;
	}

	set evidence ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._evidence = Array.isArray(new_value) ? new_value.map(val => new Condition_Evidence(val)) : [new Condition_Evidence(new_value)];
	}

	// Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier.map(v => v.toJSON()),
			clinicalStatus: this.clinicalStatus,
			verificationStatus: this.verificationStatus,
			category: this.category.map(v => v.toJSON()),
			severity: this.severity && this.severity.toJSON(),
			code: this.code && this.code.toJSON(),
			bodySite: this.bodySite.map(v => v.toJSON()),
			subject: this.subject && this.subject.toJSON(),
			context: this.context && this.context.toJSON(),
			onsetDateTime: this.onsetDateTime,
			onsetAge: this.onsetAge && this.onsetAge.toJSON(),
			onsetPeriod: this.onsetPeriod && this.onsetPeriod.toJSON(),
			onsetRange: this.onsetRange && this.onsetRange.toJSON(),
			onsetString: this.onsetString,
			abatementDateTime: this.abatementDateTime,
			abatementAge: this.abatementAge && this.abatementAge.toJSON(),
			abatementBoolean: this.abatementBoolean,
			abatementPeriod: this.abatementPeriod && this.abatementPeriod.toJSON(),
			abatementRange: this.abatementRange && this.abatementRange.toJSON(),
			abatementString: this.abatementString,
			assertedDate: this.assertedDate,
			asserter: this.asserter && this.asserter.toJSON(),
			stage: this.stage && this.stage.toJSON(),
			evidence: this.evidence.map(v => v.toJSON()),
			note: this.note.map(v => v.toJSON())
		});
	}

}

module.exports = Condition;

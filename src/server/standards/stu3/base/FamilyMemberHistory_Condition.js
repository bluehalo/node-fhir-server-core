const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Age = require('./Age');
const Range = require('./Range');
const Period = require('./Period');
const Annotation = require('./Annotation');

class FamilyMemberHistory_Condition extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'FamilyMemberHistory_Condition';
	}

	// The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetAge () {
		return this._onsetAge;
	}

	set onsetAge ( new_value ) {
		this._onsetAge = new Age(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetRange () {
		return this._onsetRange;
	}

	set onsetRange ( new_value ) {
		this._onsetRange = new Range(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetPeriod () {
		return this._onsetPeriod;
	}

	set onsetPeriod ( new_value ) {
		this._onsetPeriod = new Period(new_value);
	}

	// Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
	get onsetString () {
		return this._onsetString;
	}

	set onsetString ( new_value ) {
		this._onsetString = new_value;
	}

	// An area where general notes can be placed about this specific condition.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			outcome: this._outcome,
			onsetAge: this._onsetAge,
			onsetRange: this._onsetRange,
			onsetPeriod: this._onsetPeriod,
			onsetString: this._onsetString,
			note: this._note
		});
	}

}

module.exports = FamilyMemberHistory_Condition;
